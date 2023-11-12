package com.paul.demo.Controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.paul.demo.dto.UserDto;
import com.paul.demo.entity.User;
import com.paul.demo.service.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
public class MainController {
    private UserService userService;

    public MainController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String RootHandler() {
        return "/defaultPage/index";
    }

    @GetMapping("/Home")
    public String HomeController() {
        return "/Homepage/index";
    }

    @GetMapping("/destinations")
    public String DestinationsController() {
        return "/Destinations/destinations";
    }

    @GetMapping("/Booking")
    public String BookingController() {
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
     */
    @GetMapping("/Booking/selectseat/checkout")
    public String checkout(Model model, HttpSession session,
            @RequestParam(name = "seatNumber", required = false) String seat) {

        String Sessionto = (String) session.getAttribute("to");
        String Sessionfrom = (String) session.getAttribute("from");
        String Sessiondate = (String) session.getAttribute("date");

        model.addAttribute("to", Sessionto);
        model.addAttribute("from", Sessionfrom);
        model.addAttribute("date", Sessiondate);
        model.addAttribute("seat", seat);
        /**
         * To do - Send (to),(from),(date),(seats) to the database
         */
        return "/Ticket_Booking_Page/checkout";
    }

    @GetMapping("/Login")
    public String LoginController() {
        return "/login_page/index";
    }

    @GetMapping("/MyAccount")
    public String MyAccountController() {
        return "/account_profile/index";
    }

    // handler method to handle user registration form request
    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        UserDto user = new UserDto();
        model.addAttribute("user", user);
        return "/sign_up/index";
    }

    // handler method to handle user registration form submit request// handler
    // method to handle user registration form submit request
    @PostMapping("/register/save")
    public String registration(@Validated @ModelAttribute("user") UserDto userDto,
            BindingResult result,

            Model model) {
        User existingUser = userService.findByEmail(userDto.getEmail());

        if (existingUser != null && existingUser.getEmail() != null && !existingUser.getEmail().isEmpty()) {
            result.rejectValue("email", null,
                    "There is already an account registered with the same email");
        }

        if (result.hasErrors()) {
            model.addAttribute("user", userDto);
            return "/register";
        }

        userService.saveUser(userDto);
        return "redirect:/register?success";
    }

    // handler method to handle list of users
    @GetMapping("/users")
    public String users(Model model) {
        List<UserDto> users = userService.findAllUsers();
        model.addAttribute("users", users);
        return "users";
    }
}
