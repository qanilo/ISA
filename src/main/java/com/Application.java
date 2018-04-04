package com;

import java.util.ArrayList;
import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.beans.User;
import com.repositories.UserRepository;
import com.services.StorageService;

@SpringBootApplication
public class Application implements CommandLineRunner{

	@Autowired
	private UserRepository repository;
	
	@Resource
	StorageService storageService;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

//initial
//		repository.deleteAll();
//
//		repository.save(new User("danilo", "danilo"));
//		repository.save(new User("admin", "admin"));
		storageService.deleteAll();
		storageService.init();
		

	}

}