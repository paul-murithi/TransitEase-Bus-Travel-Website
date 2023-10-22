package com.paul.backend.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserServiceDb {
	// Returns true if the database insertion is succesfull
	// firstName, secondName, email, password, phoneNo
	public boolean registerUser(String firstname, String secondname, String email, String password, String phoneno)
			throws ClassNotFoundException, SQLException {

		try {
			// Create a connection and send data to the database
			String url = "jdbc:mysql://127.0.0.1:3306/passenger_data";
			String user = "root";
			String pass = "573800";

			String query = "INSERT INTO log_in (first_name,second_name, email, user_password, phone_no) VALUES (?, ?, ?, ?, ?)";

			Class.forName("com.mysql.cj.jdbc.Driver");

			Connection con = DriverManager.getConnection(url, user, pass);

			PreparedStatement ps = con.prepareStatement(query);

			ps.setString(1, firstname);
			ps.setString(2, secondname);
			ps.setString(3, email);
			ps.setString(4, password);
			ps.setString(5, phoneno);

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
