package com.springboot.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.library.entity.UserBooks;

@Repository
public interface UserBooksRepository extends JpaRepository<UserBooks,Long> {

}
