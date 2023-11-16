package com.paul.demo.service.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paul.demo.entity.Seats;
import com.paul.demo.repository.SeatsRepository;

@Service
public class SeatsService {
    private final SeatsRepository seatsRepository;

    @Autowired
    public SeatsService(SeatsRepository seatsRepository) {
        this.seatsRepository = seatsRepository;
    }

    public void saveSeats(Seats seats) {
        seatsRepository.save(seats);
    }
}
