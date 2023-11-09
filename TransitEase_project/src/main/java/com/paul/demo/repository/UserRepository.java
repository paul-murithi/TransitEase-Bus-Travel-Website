package com.paul.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.demo.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
