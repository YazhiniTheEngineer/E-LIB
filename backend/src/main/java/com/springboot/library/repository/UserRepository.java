package com.springboot.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.library.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmailId(String emailId);
}
