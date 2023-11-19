package com.paul.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.demo.entity.Seats;
import com.paul.demo.entity.seatsStatus.SeatStatus;

public interface SeatsRepository extends JpaRepository<Seats, Long> {

    List<Seats> findByStatusNot(SeatStatus booked);

}
