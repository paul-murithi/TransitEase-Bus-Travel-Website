package com.paul.demo.service.impl;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.hibernate.Hibernate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.paul.demo.dto.BookingDto;
import com.paul.demo.dto.UserDto;
import com.paul.demo.entity.Bookings;
import com.paul.demo.entity.Role;
import com.paul.demo.entity.User;
import com.paul.demo.repository.RoleRepository;
import com.paul.demo.repository.UserRepository;
import com.paul.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository,
            RoleRepository roleRepository,
            PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void saveUser(UserDto userDto) {
        User user = new User();
        user.setName(userDto.getFirstName() + " " + userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        Role role = roleRepository.findByName("ROLE_ADMIN");
        if (role == null) {
            role = checkRoleExist();
        }
        user.setRoles(Arrays.asList(role));
        userRepository.save(user);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public List<UserDto> findAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map((user) -> mapToUserDto(user))
                .collect(Collectors.toList());
    }

    private UserDto mapToUserDto(User user) {
        UserDto userDto = new UserDto();
        String[] str = user.getName().split(" ");
        userDto.setFirstName(str[0]);
        userDto.setLastName(str[1]);
        userDto.setEmail(user.getEmail());
        return userDto;
    }

    private Role checkRoleExist() {
        Role role = new Role();
        role.setName("ROLE_ADMIN");
        return roleRepository.save(role);
    }

    @Override
    public User getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }

        Object principal = authentication.getPrincipal();
        if (principal instanceof User) {
            return (User) principal;
        }

        return null;
    }

    @Override
    public List<BookingDto> getUserBookings(User user) {

        Hibernate.initialize(user.getBookings());
        // Fetch user bookings from the database and map them to DTO
        List<Bookings> bookings = user.getBookings();
        return bookings.stream()
                .map(this::mapToBookingDto)
                .collect(Collectors.toList());
    }

    private BookingDto mapToBookingDto(Bookings booking) {
        BookingDto bookingDto = new BookingDto();
        bookingDto.setSource(booking.getSource());
        bookingDto.setDestination(booking.getDestination());
        bookingDto.setDate(booking.getDate());
        bookingDto.setId(booking.getBookingId());

        return bookingDto;
    }

}
