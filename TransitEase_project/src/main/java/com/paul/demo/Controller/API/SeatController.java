package com.paul.demo.Controller.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paul.demo.service.booking.SeatsService;

// Module to manually expose an API endpoint to initialize seats
// All seats will be initialized to the AVAILABLE status at first
@RestController
@RequestMapping("/api/seats")
public class SeatController {

    @Autowired
    private SeatsService seatsService;

    @GetMapping("/initialize")
    public String initializeSeats() {
        seatsService.initializeAllSeats();
        return "Seats initialized successfully!";
    }

}
