package com.paul.forms.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.paul.user.entity.User;

@Controller
public class FormsController {
	
	
	  @PostMapping("/Signup") 
	  public User UserRegistration(User user1) {
		  System.out.println("Working"); return user1;
	  }
	 

}
