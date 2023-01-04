package com.springboot.library.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.library.entity.User;
import com.springboot.library.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	@Override
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@Override
	public User getUser(Long id) {
		return userRepository.findById(id).get();
	}

	@Override
	public User updateUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}

	@Override
	public boolean checkUserExistsForSignIn(String emailId) {
		User user = userRepository.findByEmailId(emailId);
		if(user != null) {
			return true;
		}
		return false;
	}

	@Override
	public Long checkUserExists(String emailId, String password) {
		
		User user = userRepository.findByEmailId(emailId);
		if(user==null) {
			return Long.MIN_VALUE;
		}
		else if(user.getPassword().equals(password)) {
			return user.getUserId();
		}
		return Long.MIN_VALUE;
	}
	
	

}
