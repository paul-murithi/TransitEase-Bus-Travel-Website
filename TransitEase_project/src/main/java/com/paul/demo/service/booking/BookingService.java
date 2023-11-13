package com.paul.demo.service.booking;

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

    public void saveBooking(Bookings booking) {
        bookingRepository.save(booking);
    }

}
