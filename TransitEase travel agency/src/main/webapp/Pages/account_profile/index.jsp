<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%> <% if(session.getAttribute("username") == null){
response.sendRedirect("/TransitEase_travel_agency/Pages/login_page/index.jsp");
} %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="ISO-8859-1" />
    <title>Account profile</title>
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/Shared_styles/shared_styles.css"
    />
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/account_profile/my_profile.css"
    />
    <script
      src="/TransitEase_travel_agency/scripts/General scripts/generate_navigation.js"
      defer
    ></script>
  </head>
  <body>
    <header>
      <nav id="navigation-menu"></nav>
    </header>

    <div class="profile-picture">
      <figure class="img-cover">
        <img
          src="/TransitEase_travel_agency/Assets/icons/Image.svg"
          alt="profile"
        />
        <figcaption class="username">
          <strong>Kirera paul murithi</strong>
        </figcaption>
      </figure>
    </div>

    <fieldset class="main-dashboard">
      <legend><strong>Passenger details:</strong></legend>
      <div class="dashboard-heading"></div>
      <div class="input-group">
        <label for="first-name">First name</label>
        <input id="first-name" type="text" value="Kirera" disabled />
      </div>
      <div class="input-group">
        <label for="second-name">Second name</label>
        <input id="second-name" type="text" value="paul" disabled />
      </div>
      <div class="js-edit-btn">
        <button id="edit-personal-details">edit info</button>
        <button id="save-personal-details">Save changes</button>
      </div>
    </fieldset>

    <fieldset class="main-dashboard">
      <legend><strong>Contact details:</strong></legend>
      <div class="input-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          value="paulmurithi233@gmail.com"
          disabled
        />
      </div>
      <div class="input-group">
        <label for="phone number">Phone number</label>
        <input id="phone" type="text" value="0741862946" disabled />
      </div>
      <div class="js-edit-btn">
        <button id="edit-contact-details">edit info</button>
        <button id="save-contact-details">Save changes</button>
      </div>
    </fieldset>

    <fieldset class="main-dashboard">
      <legend><strong>Active bookings:</strong></legend>
      <div class="input-group">
        <p>
          No current bookings. Visit our
          <a
            href="/TransitEase_travel_agency/Pages/Ticket_Booking_Page/index.jsp"
            ><strong>booking page</strong></a
          >
          to start travelling now!
        </p>
        <form
          action="/TransitEase_travel_agency/Logout"
          method="post"
          class="log-out-btn"
        >
          <button type="submit">LOG OUT</button>
        </form>
      </div>
    </fieldset>

    <script src="/TransitEase_travel_agency/scripts/accountProfile/script.js"></script>
  </body>
</html>