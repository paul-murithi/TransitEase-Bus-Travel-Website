package com.paul.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.paul.demo.entity.AllSeats;
import com.paul.demo.service.booking.SeatsService;

@Controller
public class Test {
    @Autowired
    SeatsService seatsService;

    @GetMapping("/test")
    @ResponseBody
    public List<AllSeats> testSeats() {
        List<AllSeats> availableSeats = seatsService.getAvailableSeats();
        return availableSeats;
    }
}
