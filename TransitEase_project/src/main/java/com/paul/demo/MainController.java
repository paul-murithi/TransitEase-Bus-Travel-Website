package com.paul.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/*import ch.qos.logback.core.model.Model;*/
import org.springframework.ui.Model;

@Controller
public class MainController {
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("message", "Hello, Thymeleaf!");
        return "index"; // Returns "index.html" from the templates folder
    }

    @GetMapping("/Home")
    public String HomeController() {
        return "/Homepage/index";
    }

    @GetMapping("/Destinations")
    public String DestinationsController() {
        return "/Destinations/destinations";
    }

    @GetMapping("/Booking")
    public String BookingController() {
        return "/Ticket_Booking_Page/index";
    }

    @GetMapping("/Login")
    public String LoginController() {
        return "/login_page/index";
    }

    @GetMapping("/MyAccount")
    public String MyAccountController() {
        return "/account_profile/index";
    }

}
