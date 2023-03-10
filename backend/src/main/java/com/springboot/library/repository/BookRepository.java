package com.springboot.library.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.library.entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

	List<Book> findAllByOrderByPublishedDateAsc();

}
