package com.paul.demo.forms;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.paul.models.UserModel;

@Controller
public class FormControllers {
	
	@PostMapping("/Signup")
	@ResponseBody
	public UserModel SignupController(UserModel person) {
		return person;
	}

}
