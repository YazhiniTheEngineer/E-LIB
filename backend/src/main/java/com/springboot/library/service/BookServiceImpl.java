package com.springboot.library.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.library.entity.Book;
import com.springboot.library.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService{

	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public List<Book> getAllBook() {
		return bookRepository.findAll();
	}

	@Override
	public Book getBook(Long id) {
		return bookRepository.findById(id).get();
	}

	@Override
	public Book updateBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}

	@Override
	public List<Book> findAllByOrderByPublishedDateAsc() {
		return bookRepository.findAllByOrderByPublishedDateAsc();
	}

	@Override
	public List<Book> findByBookName(String bookName) {
		String bookname = bookName.toLowerCase();
		List<Book> books = bookRepository.findAll();
		List<Book> search = new ArrayList<>();
		for(Book book : books) {
			if(book.getBookName().toLowerCase().contains(bookname))
				search.add(book);
		}
		
		if(search.isEmpty()) {
			return null;
		}
		
		return search;
	}

	@Override
	public List<Book> saveListOfBooks(List<Book> books) {
		return bookRepository.saveAll(books);
	}

}
