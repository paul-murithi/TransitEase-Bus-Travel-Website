package com.paul.demo.dto;

import com.paul.demo.entity.Bookings;
import com.paul.demo.entity.Seats;

public class TicketsDto {

    private Long ticketId;

    private Bookings booking;

    private Seats seat;

    public TicketsDto() {
    }

    public TicketsDto(Bookings booking, Seats seat) {
        this.booking = booking;
        this.seat = seat;
    }

    public Bookings getBooking() {
        return booking;
    }

    public void setBooking(Bookings booking) {
        this.booking = booking;
    }

    public Seats getSeat() {
        return seat;
    }

    public void setSeat(Seats seat) {
        this.seat = seat;
    }

}
