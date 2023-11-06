package com.paul.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String Homepage() {
		return "/Homepage/index.jsp";
	}
	
	@RequestMapping("/TicketBooking")
	public String TicketBookingController() {
		return "/Ticket_Booking_Page/index.jsp";
	}
	
	@RequestMapping("/Destinations")
	public String DestinationsControlleer() {
		return "/Destinations/destinations.html";
	}
	
	@RequestMapping("/Login")
	public String LoginController() {
		return "/login_page/index.jsp";
	}
	
	@RequestMapping("/Signup")
	public String SignupController() {
		return "/sign_up/index.html";
	}
	
	@RequestMapping("/MyAccount")
	public String MyAccountController() {
		return "/account_profile/index.jsp";
	}
	
	@RequestMapping("/TicketBooking/Selectseats")
	public String SelectseatsController() {
		return "/Ticket_Booking_Page/selectSeats.jsp";
	}
	
	@RequestMapping("/TicketBooking/Selectseats/checkout")
	public String CheckoutController() {
		return "/Ticket_Booking_Page/checkout.jsp";
	}
	
}
