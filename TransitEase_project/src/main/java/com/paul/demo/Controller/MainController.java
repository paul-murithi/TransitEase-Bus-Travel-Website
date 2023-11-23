package com.paul.demo.Controller;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.paul.demo.dto.BookingDto;
import com.paul.demo.dto.UserDto;
import com.paul.demo.entity.User;
import com.paul.demo.service.UserService;

@Controller
public class MainController {
    private UserService userService;

    public MainController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String RootHandler() {
        return "/defaultPage/index";
    }

    @GetMapping("/Home")
    public String HomeController() {
        return "/Homepage/index";
    }

    @GetMapping("/destinations")
    public String DestinationsController() {
        return "/Destinations/destinations";
    }

    @GetMapping("/Login")
    public String LoginController() {
        return "/login_page/index";
    }

    @GetMapping("/MyAccount")
    public String myAccount(Model model, Authentication authentication) {
        User user = userService.getAuthenticatedUser();
        // Fetch user's bookings
        List<BookingDto> bookings = userService.getUserBookings(user);

        // Split the full name into first name and last name
        String[] nameParts = user.getName().split(" ");
        String userName = user.getName();

        UserDto userDto = new UserDto();
        userDto.setFirstName(nameParts[0]);
        userDto.setLastName(nameParts[1]);
        userDto.setEmail(user.getEmail());

        model.addAttribute("user", userDto);
        model.addAttribute("bookings", bookings);
        model.addAttribute("name", userName);
        return "/account_profile/index";
    }

    // handler method to handle user registration form request
    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        UserDto user = new UserDto();
        model.addAttribute("user", user);
        return "/sign_up/index";
    }

    // handler method to handle user registration form submit request// handler
    // method to handle user registration form submit request
    @PostMapping("/register/save")
    public String registration(@Validated @ModelAttribute("user") UserDto userDto,
            BindingResult result,

            Model model) {
        User existingUser = userService.findByEmail(userDto.getEmail());

        if (existingUser != null && existingUser.getEmail() != null && !existingUser.getEmail().isEmpty()) {
            result.rejectValue("email", null,
                    "There is already an account registered with the same email");
            return "redirect:/register?emailerror";
        }

        if (result.hasErrors()) {
            model.addAttribute("user", userDto);
            return "/register";
        }

        userService.saveUser(userDto);
        return "redirect:/register?success";
    }

    // handler method to handle list of users
    @GetMapping("/users")
    public String users(Model model) {
        List<UserDto> users = userService.findAllUsers();
        model.addAttribute("users", users);
        return "users";
    }
}
