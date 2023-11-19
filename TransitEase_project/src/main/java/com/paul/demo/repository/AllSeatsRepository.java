package com.paul.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.demo.entity.AllSeats;
import com.paul.demo.entity.seatsStatus.SeatStatus;

public interface AllSeatsRepository extends JpaRepository<AllSeats, Long> {

    List<AllSeats> findBySeatNumberIn(List<String> seatNumbers);

    List<AllSeats> findByStatus(SeatStatus status);

}
