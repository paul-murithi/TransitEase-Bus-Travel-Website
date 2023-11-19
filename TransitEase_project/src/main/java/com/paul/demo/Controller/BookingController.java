package com.paul.demo.Controller;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.paul.demo.entity.AllSeats;
import com.paul.demo.entity.Bookings;
import com.paul.demo.entity.Seats;
import com.paul.demo.entity.User;
import com.paul.demo.entity.seatsStatus.IsVipSeat;
import com.paul.demo.entity.seatsStatus.SeatStatus;
import com.paul.demo.repository.SeatsRepository;
import com.paul.demo.repository.UserRepository;
import com.paul.demo.service.booking.BookingService;
import com.paul.demo.service.booking.SeatsService;

import jakarta.servlet.http.HttpSession;

@Controller
public class BookingController {

    @Autowired
    private BookingService bookingsService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SeatsService seatsService;

    @Autowired
    private SeatsRepository seatsRepository;

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

        List<AllSeats> availableSeats = seatsService.getAvailableSeats();

        // Get booked seat numbers
        List<String> bookedSeatNumbers = seatsService.getBookedSeatNumbers();

        model.addAttribute("availableSeats", availableSeats);
        model.addAttribute("bookedSeatNumbers", bookedSeatNumbers);
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
        model.addAttribute("seat", seat);

        return "/Ticket_Booking_Page/checkout";
    }

    @PostMapping("/Booking/save")
    public String saveBooking(HttpSession session, Model model) throws ParseException {

        String destination = (String) session.getAttribute("to");
        String source = (String) session.getAttribute("from");
        // String phoneNumber = requestBody.get("key1");
        String dateString = (String) session.getAttribute("date");

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = dateFormat.parse(dateString);

        String seatNumberString = (String) session.getAttribute("seat");

        List<String> selectedSeats = new ArrayList<>();

        // Check if there is multiple seats
        if (seatNumberString.contains(",")) {
            String[] seatNumbersArray = seatNumberString.split(",");
            selectedSeats.addAll(Arrays.asList(seatNumbersArray));
        } else {

            selectedSeats.add(seatNumberString.trim());
        }
        BigDecimal totalPrice = IsVipSeat.calculatePrice(selectedSeats);
        // Convert list of integers to comma-separated string
        String seatNumbersString = String.join(",", seatNumberString);

        model.addAttribute("to", destination);
        model.addAttribute("from", source);
        model.addAttribute("date", date);
        model.addAttribute("seat", selectedSeats);

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        User user = userRepository.findByEmail(email);

        Bookings booking = new Bookings();
        booking.setUser(user);
        booking.setDestination(destination);
        booking.setSource(source);
        booking.setDate(date);
        bookingsService.saveBooking(booking);

        List<String> seatNumbers = Arrays.asList(seatNumbersString.split(","));

        Seats seats = new Seats();
        seats.setBooking(booking);
        seats.setSeatNumber(seatNumbersString);
        seats.setStatus(SeatStatus.BOOKED);
        seats.setPrice(totalPrice);

        seatsService.bookSeats(seats, seatNumbers, booking);

        return "redirect:/Booking/selectseat/checkout?Booking success";
    }
}
