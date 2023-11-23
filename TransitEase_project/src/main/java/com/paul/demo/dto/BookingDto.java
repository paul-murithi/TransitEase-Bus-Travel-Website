package com.paul.demo.dto;

import java.util.Date;
import java.util.List;

public class BookingDto {
    private long id;
    private Date date;
    private String source;
    private String destination;
    private List<SeatDto> seats;
    private UserDto user;
    private List<AllSeatsDto> allSeats;
    private List<TicketsDto> tickets;

    public BookingDto() {

    }

    public BookingDto(Date date, String source, String destination, List<SeatDto> seats, UserDto user,
            List<AllSeatsDto> allSeats, List<TicketsDto> tickets) {
        this.date = date;
        this.source = source;
        this.destination = destination;
        this.seats = seats;
        this.user = user;
        this.allSeats = allSeats;
        this.tickets = tickets;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public List<SeatDto> getSeats() {
        return seats;
    }

    public void setSeats(List<SeatDto> seats) {
        this.seats = seats;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public List<AllSeatsDto> getAllSeats() {
        return allSeats;
    }

    public void setAllSeats(List<AllSeatsDto> allSeats) {
        this.allSeats = allSeats;
    }

    public List<TicketsDto> getTickets() {
        return tickets;
    }

    public void setTickets(List<TicketsDto> tickets) {
        this.tickets = tickets;
    }

}
