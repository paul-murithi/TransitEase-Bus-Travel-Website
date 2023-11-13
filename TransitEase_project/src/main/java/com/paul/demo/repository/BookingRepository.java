package com.paul.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.demo.entity.Bookings;

public interface BookingRepository extends JpaRepository<Bookings, Long> {

}
