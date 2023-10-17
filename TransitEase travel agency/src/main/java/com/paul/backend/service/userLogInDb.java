
package com.paul.backend.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Implementation of the class userLogInDb to read data from the database
 * Returns true if user is found and false otherwise
 */
public class userLogInDb {
	public boolean logInUser(String username, String password) throws ClassNotFoundException {

		String url = "jdbc:mysql://127.0.0.1:3306/passenger_data";
		String user = "root";
		String pass = "573800";

		String query = "SELECT * FROM log_in WHERE user_name = ? AND user_password = ? ";

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, user, pass);

			PreparedStatement ps = con.prepareStatement(query);
			ps.setString(1, username);
			ps.setString(2, password);

			ResultSet rs = ps.executeQuery();

			if (rs.next()) {
				return true;
			} else {
				return false;
			}

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}