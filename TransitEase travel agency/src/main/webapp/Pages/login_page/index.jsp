<%@ page language="java" contentType="text/html; charset=ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Log in</title>
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/LoginPage/login.css"
    />
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/Shared_styles/shared_styles.css"
    />
    <script
      src="/TransitEase_travel_agency/scripts/General scripts/generate_navigation.js"
      defer
    ></script>
  </head>

  <body>
    <!--navigation links-->
    <nav id="navigation-menu"></nav>
    <!--form input elements-->
    <div class="parent-container">
      <div class="login-container login-opacity-true">
        <div class="login-heading">
          <h1 class="log-in-header">Welcome back, please log in to continue</h1>
        </div>
        <form
          action="/TransitEase_travel_agency/Login"
          method="post"
          class="login-form"
        >
          <label for="name">Enter your username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="userName"
            required
          />

          <label for="password">Enter your password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />

          <div class="error-container">
            <p class="error-display" id="error-display"></p>
          </div>

          <div class="login-submit-btn">
            <button type="submit" title="log in">login</button>
          </div>
        </form>
        <div class="login-sign-up">
          <p>
            Dont have a account?
            <a href="/TransitEase_travel_agency/Pages/sign_up/index.html"
              >sign up</a
            >
          </p>
        </div>
      </div>
    </div>

    <script src="/TransitEase_travel_agency/scripts/logInPage/login.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const errorDisplay = document.querySelector(".error-display");
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get("error");

        if (error) {
          errorDisplay.innerText =
            "User not found! Please check your login credentials and try again";
        }
      });
    </script>
  </body>
</html>
