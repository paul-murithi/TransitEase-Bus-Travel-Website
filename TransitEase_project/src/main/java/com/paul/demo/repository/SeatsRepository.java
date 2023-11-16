package com.paul.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.demo.entity.Seats;

public interface SeatsRepository extends JpaRepository<Seats, Long> {

}
