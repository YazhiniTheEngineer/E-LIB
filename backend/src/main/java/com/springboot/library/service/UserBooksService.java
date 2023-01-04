package com.springboot.library.service;

import java.util.List;

import com.springboot.library.entity.UserBooks;

public interface UserBooksService {

	UserBooks saveUserBook(UserBooks userbook);
	
	List<UserBooks> getAllUserBooks();
	
	UserBooks getUserBook(Long id);
	
	UserBooks updateBook(UserBooks userbook);
	
	void deleteUserBooks(Long id);
	
	List<UserBooks> getAllUserBooksBasedOnUserId(Long userId);
}
