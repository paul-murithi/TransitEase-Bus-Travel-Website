package com.paul.demo.service.booking;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paul.demo.entity.Bookings;
import com.paul.demo.repository.BookingRepository;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Long saveBooking(Bookings booking) {
        Bookings savedBooking = bookingRepository.save(booking);
        return savedBooking.getBookingId();
    }

    public Bookings getBookingById(Long bookingId) {
        Optional<Bookings> booking = bookingRepository.findById(bookingId);
        return booking.orElse(null);
    }

}
