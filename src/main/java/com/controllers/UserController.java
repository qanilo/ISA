package com.controllers;

import java.util.Iterator;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.beans.User;
import com.repositories.UserRepository;



@RestController
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());


	@RequestMapping(
			value = "/login",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public String guestLogin(
			@RequestBody User user, HttpServletResponse response,HttpSession session) throws Exception {
		
		System.out.println("-------------All users-----------");
		for (User u : userRepository.findAll()) {
			System.out.println(u);
		}
		System.out.println("---------------------------------");
		
		if(userRepository.findByUsername(user.getUsername()) != null) {
			System.out.println("User pronadjen, logovanje...");
			return "{\"username\":\""+user.getUsername()+"\"}";
		} else {
			System.out.println("User ne postoji!");
			return "{\"username\":\"\"}";
		}
	}
	
}
