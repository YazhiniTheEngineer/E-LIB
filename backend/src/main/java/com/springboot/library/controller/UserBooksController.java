package com.springboot.library.controller;

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

import com.springboot.library.entity.UserBooks;
import com.springboot.library.service.UserBooksService;


@RestController
@RequestMapping("/userbooks")
@CrossOrigin(origins="http://localhost:4200")
public class UserBooksController {

	@Autowired
	private UserBooksService userbooksService;
	
	@PostMapping("/")
	public UserBooks saveUserBook(@RequestBody UserBooks userbooks) {
		 
		return userbooksService.saveUserBook(userbooks);
	}
	
	@GetMapping("/")
	public List<UserBooks> getAllUserBooks(){
		return userbooksService.getAllUserBooks();
	}
	
	@GetMapping("/{id}")
	public UserBooks getUserBook(@PathVariable("id") Long id) {
		return userbooksService.getUserBook(id);
	}
	
	@GetMapping("/userId/{userId}")
	public List<UserBooks> getUserBooksByUserId(@PathVariable("userId") Long userId){
		return userbooksService.getAllUserBooksBasedOnUserId(userId);
	}
	
	@PutMapping("/")
	public UserBooks updateUserBooks(@RequestBody UserBooks userbook) {
		return userbooksService.updateBook(userbook);
	}
	
	@DeleteMapping("/{id}")
	public void deleteUserBooks(@PathVariable("id") Long id) {
		userbooksService.deleteUserBooks(id);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
