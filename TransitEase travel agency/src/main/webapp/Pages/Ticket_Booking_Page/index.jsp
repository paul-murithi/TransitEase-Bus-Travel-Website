<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%
	if(session.getAttribute("username") == null){
		response.sendRedirect("/TransitEase_travel_agency/Pages/login_page/index.jsp");
	}
%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ticket booking page</title>
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/Shared_styles/shared_styles.css"
    />
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/TicketBookingPage/homepage/ticket_booking_page.css"
    />
    <script
      src="/TransitEase_travel_agency/scripts/General scripts/generate_navigation.js"
      defer
    ></script>
    <!-- <script src="/scripts/generata_navigation.js" defer></script>
    <script src="/scripts/select_seats.js" defer></script> -->
  </head>

  <body>
    <nav id="navigation-menu"></nav>
    <main>
      <div class="page-container">
        <div class="travel-info">
          <div class="travel-banner">
            <h1>Hey <span class="customer-name" id="user-name">John!</span></h1>
            <p>Where do you want to go?</p>
          </div>
          <form action="#">
            <div class="travel-inpt page-fx">
              <p style="color: red" id="error-container"></p>
              <input
                type="text"
                name="#"
                id="inpt-frm"
                placeholder="Travelling from"
                class="destination-input"
              />
              <div class="suggestion-box">
                <ul
                  class="suggestions-container"
                  id="js-suggestions-container-from"
                ></ul>
              </div>

              <input
                type="text"
                name="#"
                id="inpt-to"
                placeholder="Travelling to"
                class="destination-input"
              />
              <div class="suggestion-box">
                <ul
                  class="suggestions-container"
                  id="js-suggestions-container-to"
                ></ul>
              </div>
            </div>

            <div class="travel-dates page-fx-2">
              <button type="button" class="addDate">Today</button>
              <button type="button" class="addDate">Tomorrow</button>
              <input
                type="date"
                name="#"
                id="inpt-date"
                title="Date of travel"
              />
            </div>
            <div class="checkout-routes-btn page-fx">
              <button type="button" id="bkn-page-search-btn">Find Buses</button>
            </div>
          </form>
        </div>
      </div>
    </main>
    <script src="/TransitEase_travel_agency/scripts/TicketBookingPage/script.js"></script>
  </body>
</html>