package com.springboot.library.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.library.entity.UserBooks;
import com.springboot.library.repository.UserBooksRepository;

@Service
public class UserBooksServiceImpl implements UserBooksService{
	
	@Autowired
	private UserBooksRepository userbooksRepository;

	@Override
	public UserBooks saveUserBook(UserBooks userbook) {
		List<UserBooks> userbooks = userbooksRepository.findAll();
		for(UserBooks ubook : userbooks) {
			if(ubook.getUser().getUserId() == userbook.getUser().getUserId() && ubook.getBook().getBookId() == userbook.getBook().getBookId()) {
				return null;
			}
		}
		userbook.setIssuedDate(new Date(System.currentTimeMillis()));
		userbook.setReturnDate(Date.valueOf(LocalDate.now().plusDays(30)));
		return userbooksRepository.save(userbook);
	}

	@Override
	public List<UserBooks> getAllUserBooks() {
		return userbooksRepository.findAll();
	}

	@Override
	public UserBooks getUserBook(Long id) {
		return userbooksRepository.findById(id).get();
	}

	@Override
	public UserBooks updateBook(UserBooks userbook) {
		return userbooksRepository.save(userbook);
	}

	@Override
	public void deleteUserBooks(Long id) {
		userbooksRepository.deleteById(id);
	}

	@Override
	public List<UserBooks> getAllUserBooksBasedOnUserId(Long userId) {
		List<UserBooks> userbooks = userbooksRepository.findAll();
		List<UserBooks> result = new ArrayList<>();
		for(UserBooks userbook : userbooks) {
			if(userbook.getUser().getUserId()==userId) {
				result.add(userbook);
			}
		}
		return result;
	}

}
