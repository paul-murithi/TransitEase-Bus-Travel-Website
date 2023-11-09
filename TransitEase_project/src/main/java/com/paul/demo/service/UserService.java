package com.paul.demo.service;

import java.util.List;

import com.paul.demo.dto.UserDto;
import com.paul.demo.entity.User;


public interface UserService {

	
	void saveUser(UserDto userDto);
	
	User findUserByEmail(String email);

    List<UserDto> findAllUsers();
}
