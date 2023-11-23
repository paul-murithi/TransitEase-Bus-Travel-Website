package com.paul.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.demo.entity.Bookings;
import com.paul.demo.entity.Seats;
import com.paul.demo.entity.Tickets;

public interface TicketRepository extends JpaRepository<Tickets, Long> {
    List<Tickets> findByBooking(Bookings booking);

    List<Tickets> findBySeat(Seats seat);
}
