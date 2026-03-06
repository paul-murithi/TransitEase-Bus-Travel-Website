package com.paul.demo.service.booking;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.paul.demo.entity.AllSeats;
import com.paul.demo.entity.Bookings;
import com.paul.demo.entity.Seats;
import com.paul.demo.entity.seatsStatus.SeatStatus;
import com.paul.demo.repository.AllSeatsRepository;
import com.paul.demo.repository.SeatsRepository;

import jakarta.transaction.Transactional;

@Service
public class SeatsService {

    private final SeatsRepository seatsRepository;
    private final AllSeatsRepository allSeatsRepository;

    @Autowired
    public SeatsService(SeatsRepository seatsRepository, AllSeatsRepository allSeatsRepository) {
        this.seatsRepository = seatsRepository;
        this.allSeatsRepository = allSeatsRepository;
    }

    @Transactional
    public void bookSeats(Seats seats, List<String> seatNumbers, Bookings booking) {
        // Find the corresponding seats in the AllSeats table
        List<AllSeats> allSeats = allSeatsRepository.findBySeatNumberIn(seatNumbers);

        // Update the status of the corresponding seats in the AllSeats table
        for (AllSeats allSeat : allSeats) {
            allSeat.setStatus(SeatStatus.BOOKED);
        }

        // Save the updated AllSeats entities
        allSeatsRepository.saveAll(allSeats);

        // Set the booking for the Seats entity
        seats.setBooking(booking);

        // Save the Seats entity
        seatsRepository.save(seats);
    }

    public void initializeAllSeats() {
        List<AllSeats> allSeats = new ArrayList<>();

        for (int i = 1; i <= 43; i++) {
            AllSeats seat = new AllSeats();
            seat.setSeatNumber(String.valueOf(i));
            seat.setStatus(SeatStatus.AVAILABLE);
            allSeats.add(seat);
        }

        allSeatsRepository.saveAll(allSeats);
    }

    public List<AllSeats> getAvailableSeats() {
        return allSeatsRepository.findByStatus(SeatStatus.AVAILABLE);
    }

    public List<String> getBookedSeatNumbers() {
        List<AllSeats> bookedSeats = allSeatsRepository.findByStatus(SeatStatus.BOOKED);
        return bookedSeats.stream()
                .map(AllSeats::getSeatNumber)
                .collect(Collectors.toList());
    }

    public List<Seats> getSeatsByBookingId(Long bookingId) {
        return seatsRepository.findByBookingId(bookingId);
    }
}
