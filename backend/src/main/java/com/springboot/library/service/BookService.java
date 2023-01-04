package com.springboot.library.service;

import java.util.List;

import com.springboot.library.entity.Book;

public interface BookService {
	Book saveBook(Book book);
	
	List<Book> getAllBook();
	
	Book getBook(Long id);
	
	Book updateBook(Book book);
	
	void deleteBook(Long id);

	List<Book> findAllByOrderByPublishedDateAsc();

	List<Book> findByBookName(String bookName);

	List<Book> saveListOfBooks(List<Book> books);
}
