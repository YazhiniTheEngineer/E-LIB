package com.springboot.library.controller;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.library.entity.Book;
import com.springboot.library.entity.User;
import com.springboot.library.exception.ApiException;
import com.springboot.library.exception.ApiRequestException;
import com.springboot.library.service.BookService;
import com.springboot.library.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/")
	public User saveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
	
	@GetMapping("/")
	public List<User> getAllUser(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/{userId}")
	public User getUser(@PathVariable("userId") Long userId) {
		if(userService.getUser(userId).getUserId() > 0) {
			return userService.getUser(userId);
		}else {
			throw new ApiRequestException("No User Found");
		}
	}
		
	@PutMapping("/")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@DeleteMapping("/{userId}")
	public void deleteUserById(@PathVariable("userId") Long userId) {
		userService.deleteUser(userId);
	}
	
	
	@GetMapping("/email/{emailId}")
	public boolean checkUserExistsForSignIn(@PathVariable("emailId") String emailId){
		return userService.checkUserExistsForSignIn(emailId);
	}
	
	@GetMapping("/email/{emailId}/password/{password}")
	public Long checkUserExists(@PathVariable("emailId") String emailId,@PathVariable("password") String password){
		return userService.checkUserExists(emailId,password);
	}
	
	
}








