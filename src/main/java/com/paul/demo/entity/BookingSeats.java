package com.paul.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking_seats")
public class BookingSeats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Bookings booking;

    @ManyToOne
    @JoinColumn(name = "seat_id")
    private AllSeats seat;

    public BookingSeats() {
    }

    public BookingSeats(Bookings booking, AllSeats seat) {
        this.booking = booking;
        this.seat = seat;
    }

    public Bookings getBooking() {
        return booking;
    }

    public void setBooking(Bookings booking) {
        this.booking = booking;
    }

    public AllSeats getSeat() {
        return seat;
    }

    public void setSeat(AllSeats seat) {
        this.seat = seat;
    }

}
