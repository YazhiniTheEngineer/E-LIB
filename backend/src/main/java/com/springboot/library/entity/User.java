package com.springboot.library.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_id")
	private Long userId;
	
	@NonNull
	private String userName;
	
	@NonNull
	@Column(unique=true)
	private String emailId;
	
	@NonNull
	private String password;
	
	@NonNull
	private Long phoneNumber;
	
	@JsonIgnore
	@OneToMany(mappedBy="user")
	public List<UserBooks> userbooks;
	
}
