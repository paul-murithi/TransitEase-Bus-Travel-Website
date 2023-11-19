package com.paul.demo.dto;

import java.math.BigDecimal;

import com.paul.demo.entity.Bookings;
import com.paul.demo.entity.seatsStatus.SeatStatus;

public class SeatDto {
    private Long seatId;
    private Bookings booking;
    private String seatNumber;
    private BigDecimal price;
    private SeatStatus seatStatus;

    public SeatDto() {
    }

    public SeatDto(Long seatId, Bookings booking, String seatNumber, BigDecimal price, SeatStatus seatStatus) {
        this.seatId = seatId;
        this.booking = booking;
        this.seatNumber = seatNumber;
        this.price = price;
        this.seatStatus = seatStatus;
    }

    public Long getSeatId() {
        return seatId;
    }

    public void setSeatId(Long seatId) {
        this.seatId = seatId;
    }

    public Bookings getBooking() {
        return booking;
    }

    public void setBooking(Bookings booking) {
        this.booking = booking;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public SeatStatus getSeatStatus() {
        return seatStatus;
    }

    public void setSeatStatus(SeatStatus seatStatus) {
        this.seatStatus = seatStatus;
    }

}
