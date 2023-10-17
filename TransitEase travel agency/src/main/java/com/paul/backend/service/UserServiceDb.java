package com.paul.backend.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserServiceDb {
	// Returns true if the database insertion is succesfull
	public boolean registerUser(String username, String email, String password)
			throws ClassNotFoundException, SQLException {

		System.out.println("register user class called: " + username);

		try {
			// Create a connection and send data to the database
			String url = "jdbc:mysql://127.0.0.1:3306/passenger_data";
			String user = "root";
			String pass = "573800";

			String query = "INSERT INTO log_in  (user_name, email, user_password)  VALUES (?,?,?)";

			Class.forName("com.mysql.cj.jdbc.Driver");

			Connection con = DriverManager.getConnection(url, user, pass);

			PreparedStatement ps = con.prepareStatement(query);

			ps.setString(1, username);
			ps.setString(2, email);
			ps.setString(3, password);

			int row = ps.executeUpdate();

			System.out.println(row + "rows affected");

			con.close();
			ps.close();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
