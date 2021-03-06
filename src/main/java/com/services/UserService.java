package com.services;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.beans.User;
import com.repositories.UserRepository;

@Service
public class UserService implements UserServiceInterface{

    private UserRepository userRepository;
    
    public UserService(){}
    
    @Autowired
    public UserService(UserRepository userRepository) { 
      this.userRepository = userRepository;
    }
    
	@Override
	public Collection<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public User create(User user) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User update(User user) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(String id) {
		// TODO Auto-generated method stub
		
	}
	
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	public User findByConfirmationToken(String confirmationToken) {
		return userRepository.findByConfirmationToken(confirmationToken);
	}
	
	public void saveUser(User user) {
		userRepository.save(user);
	}
	
	public User findByLoggedInEmail(String loggedInEmail){
		return userRepository.findByLoggedInEmail(loggedInEmail);
	}
}

