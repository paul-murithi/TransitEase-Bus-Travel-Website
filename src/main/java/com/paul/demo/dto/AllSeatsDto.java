package com.paul.demo.dto;

import com.paul.demo.entity.seatsStatus.SeatStatus;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class AllSeatsDto {
    private Long Id;

    private String seatNumber;

    @Enumerated(EnumType.STRING)
    private SeatStatus status;

    public AllSeatsDto() {
    }

    public AllSeatsDto(String seatNumber, SeatStatus status) {
        this.seatNumber = seatNumber;
        this.status = status;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    public SeatStatus getStatus() {
        return status;
    }

    public void setStatus(SeatStatus status) {
        this.status = status;
    }

}
