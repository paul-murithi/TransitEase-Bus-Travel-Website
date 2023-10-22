package com.paul.backend.signup;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.paul.backend.service.UserServiceDb;

/**
 * Servlet implementation class SignupServlet
 */
@WebServlet("/Signup")
public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		/**
		 * Data to be sent to the server: 1. Username 2. Email 3. Password
		 */
		// Get data from the inputs
		String firstName = request.getParameter("firstName");
		String secondName = request.getParameter("secondName");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String phoneNo = request.getParameter("phoneNo");
		
		UserServiceDb userService = new UserServiceDb();
		
		boolean registrationSuccess = false;
		try {
			registrationSuccess = userService.registerUser(firstName, secondName, email, password, phoneNo);
		} catch (ClassNotFoundException | SQLException e) {
			System.out.println("Class not reached");
			e.printStackTrace();
		}

		if (registrationSuccess) {
			response.sendRedirect("/TransitEase_travel_agency/Pages/login_page/index.jsp?registration=success");
		} else {
			response.sendRedirect("/TransitEase_travel_agency/Pages/sign_up/index.jsp?registration=failed");
		}

	}

}
