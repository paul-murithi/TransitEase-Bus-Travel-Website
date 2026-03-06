package com.paul.demo.entity.seatsStatus;

import java.math.BigDecimal;
import java.util.List;

public class IsVipSeat {

    private static boolean isVipSeat(String seatNumber) {
        return Integer.parseInt(seatNumber) <= 12;
    }

    public static BigDecimal calculatePrice(List<String> seatNumbers) {
        BigDecimal totalCost = BigDecimal.ZERO;

        for (String seatNumber : seatNumbers) {
            totalCost = totalCost.add(calculateIndividualSeatPrice(seatNumber));
        }

        return totalCost;
    }

    private static BigDecimal calculateIndividualSeatPrice(String seatNumber) {
        if (isVipSeat(seatNumber)) {
            // VIP seat pricing logic
            return new BigDecimal("2000.00");
        } else {
            // Regular seat pricing logic
            return new BigDecimal("1500.00");
        }
    }

}
