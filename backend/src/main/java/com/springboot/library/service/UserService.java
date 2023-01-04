package com.springboot.library.service;

import java.util.List;


import com.springboot.library.entity.User;

public interface UserService {

	User saveUser(User user);

	List<User> getAllUsers();

	User getUser(Long id);
	
	User updateUser(User user);
	
	void deleteUser(Long id);

	boolean checkUserExistsForSignIn(String emailId);

	Long checkUserExists(String emailId, String password);

}
