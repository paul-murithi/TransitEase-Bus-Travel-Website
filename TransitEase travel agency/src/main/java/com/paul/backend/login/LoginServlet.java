package com.paul.backend.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.paul.backend.service.userLogInDb;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/Login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// Get the user inputs
		String email = request.getParameter("email");
		String passWord = request.getParameter("password");

		userLogInDb login = new userLogInDb();

		boolean loggedIn = false;
		try {
			loggedIn = login.logInUser(email, passWord);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		if (loggedIn) {
			HttpSession session = request.getSession();
			session.setAttribute("username", email);

			response.sendRedirect("/TransitEase_travel_agency/Pages/Homepage/index.jsp");
		}

		else {

			String errorMessage = "User not found";

			// Redirect to the login page with the error message
			response.sendRedirect("/TransitEase_travel_agency/Pages/login_page/index.jsp?error=" + errorMessage);

			/*
			 * response.sendRedirect("/TransitEase_travel_agency/Pages/Homepage/index.jsp");
			 */
		}
	}

}
