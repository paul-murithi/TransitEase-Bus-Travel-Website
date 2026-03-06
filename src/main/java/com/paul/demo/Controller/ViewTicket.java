package com.paul.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.paul.demo.entity.Bookings;
import com.paul.demo.entity.Seats;
import com.paul.demo.service.booking.BookingService;
import com.paul.demo.service.booking.SeatsService;

import jakarta.servlet.http.HttpSession;

@Controller
public class ViewTicket {

    private final BookingService bookingService;
    private final SeatsService seatsService;

    @Autowired
    public ViewTicket(SeatsService seatsService, BookingService bookingService) {
        this.seatsService = seatsService;
        this.bookingService = bookingService;
    }

    @GetMapping("/showticket")
    public String holdBookingId(HttpSession session) {
        Long bookingId = (Long) session.getAttribute("bookingId");
        return "redirect:/ticket/" + bookingId;
    }

    @GetMapping("/ticket/{bookingId}")
    public String viewTicket(@PathVariable Long bookingId, Model model) {
        Bookings booking = bookingService.getBookingById(bookingId);
        List<Seats> seats = seatsService.getSeatsByBookingId(bookingId);

        model.addAttribute("booking", booking);
        model.addAttribute("seats", seats);

        return "/sampleTicket/index";
    }

}
