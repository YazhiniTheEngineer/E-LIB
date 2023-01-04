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

import com.springboot.library.entity.Book;
import com.springboot.library.exception.ApiRequestException;
import com.springboot.library.service.BookService;

@RestController
@RequestMapping("/book")
@CrossOrigin(origins="http://localhost:4200")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@PostMapping("/")
	public Book saveBook(@RequestBody Book book) {
		return bookService.saveBook(book);
	}
	
	@PostMapping("/listOfBooks")
	public List<Book> saveListOfBooks(@RequestBody List<Book> books){
		return bookService.saveListOfBooks(books);
	}
	
	@GetMapping("/")
	public List<Book> getAllBooks(){
		return bookService.getAllBook();
	}
	
	@GetMapping("/{bookId}")
	public Book getBook(@PathVariable("bookId") Long bookId) {
		if(bookService.getBook(bookId).getBookId() > 0) {
			return bookService.getBook(bookId);
		}else {
			throw new ApiRequestException("No Books Found");
		}
	}
	
	@PutMapping("/")
	public Book updateBook(@RequestBody Book book) {
		return bookService.updateBook(book);
	}
	
	@DeleteMapping("/{bookId}")
	public void deleteBook(@PathVariable("bookId") Long bookId) {
		bookService.deleteBook(bookId);
	}
	
	@GetMapping("/newarrivals")
	public List<Book> getNewArrivals(){
		List<Book> books = bookService.findAllByOrderByPublishedDateAsc();
		List<Book> book = bookService.getAllBook();
		if(books.size() > 10) {
			return books.subList(0, 10);
		}else if(books.size() > 5) {
			return books.subList(0, 5);
		}
		
		return book;
		
	}
	
	@GetMapping("/bookName/{bookName}")
	public List<Book> searchByBookName(@PathVariable("bookName") String bookName) {
		return bookService.findByBookName(bookName);
	}
	
		
}





