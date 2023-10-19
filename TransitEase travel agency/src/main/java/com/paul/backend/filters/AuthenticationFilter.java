package com.paul.backend.filters;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Servlet Filter implementation class AuthenticationFilter
 */
@WebFilter("")// Filter to allrequests
public class AuthenticationFilter extends HttpFilter implements Filter {
       
    /**
	 * 
	 */
	private static final long serialVersionUID = 6965229039374206357L;

	/**
     * @see HttpFilter#HttpFilter()
     */
	/*
	 * public AuthenticationFilter() { super(); // TODO Auto-generated constructor
	 * stub
	 */
    
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		// Check if the user has an active session
		HttpSession session = ((HttpServletRequest) request).getSession();
		
        if (session.getAttribute("username") == null) {
            // User is not logged in, redirect to login page
        	
            request.getRequestDispatcher("/Pages/login_page/index.jsp").forward(request, response);
            return;
        }
        // User is authenticated, continue processing the request
        chain.doFilter(request, response);

		// pass the request along the filter chain
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
