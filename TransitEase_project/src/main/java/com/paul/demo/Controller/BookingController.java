package com.paul.demo.Controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.paul.demo.entity.Bookings;
import com.paul.demo.entity.User;
import com.paul.demo.repository.UserRepository;
import com.paul.demo.service.booking.BookingService;

import jakarta.servlet.http.HttpSession;

@Controller
public class BookingController {

    @Autowired
    private BookingService bookingsService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/Booking")
    public String bookingController() {
        return "/Ticket_Booking_Page/index";
    }

    /**
     * @param to
     * @param from
     * @param date
     * @param model
     * @param session
     * @return Handler method to handle select seats page
     */
    @GetMapping("/Booking/selectseat")
    public String selectSeats(
            @RequestParam(name = "to", required = false) String to,
            @RequestParam(name = "from", required = false) String from,
            @RequestParam(name = "date", required = false) String date, Model model, HttpSession session) {

        model.addAttribute("to", to);
        model.addAttribute("from", from);
        model.addAttribute("date", date);

        session.setAttribute("to", to);
        session.setAttribute("from", from);
        session.setAttribute("date", date);
        return "/Ticket_Booking_Page/selectSeats";
    }

    /**
     * 
     * @param model
     * @param session
     * @param seat
     * @return Checkout page after getting all travelling data information
     * @throws ParseException
     */
    @GetMapping("/Booking/selectseat/checkout")
    public String checkout(Model model, HttpSession session,
            @RequestParam(name = "seatNumber", required = false) String seat) throws ParseException {

        session.setAttribute("seat", seat);
        String destination = (String) session.getAttribute("to");
        String source = (String) session.getAttribute("from");
        String dateString = (String) session.getAttribute("date");

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = dateFormat.parse(dateString);

        model.addAttribute("to", destination);
        model.addAttribute("from", source);
        model.addAttribute("date", date);

        return "/Ticket_Booking_Page/checkout";
    }

    @PostMapping("/Booking/save")
    public String saveBooking(HttpSession session, Model model) throws ParseException {

        String destination = (String) session.getAttribute("to");
        String source = (String) session.getAttribute("from");
        String seat = (String) session.getAttribute("seat");
        // String phoneNumber = requestBody.get("key1");
        String dateString = (String) session.getAttribute("date");

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = dateFormat.parse(dateString);

        model.addAttribute("to", destination);
        model.addAttribute("from", source);
        model.addAttribute("date", date);
        model.addAttribute("seat", seat);

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        User user = userRepository.findByEmail(email);

        Bookings booking = new Bookings();
        booking.setUser(user);
        booking.setDestination(destination);
        booking.setSource(source);
        booking.setDate(date);

        bookingsService.saveBooking(booking);

        return "redirect:/Booking/selectseat/checkout?Booking success";
    }
}
