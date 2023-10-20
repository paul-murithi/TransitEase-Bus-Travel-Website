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
    <title>Document</title>
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/Shared_styles/shared_styles.css"
    />
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/TicketBookingPage/checkOut/checkout.css"
    />
  </head>

  <body>
    <nav id="navigation-menu"></nav>
    <main>
      <div class="main-grid-wrap">
        <div class="payment-info-details">
          <h1>Booking summary:</h1>
          <fieldset class="trip-details">
            <legend>Trip details</legend>
            <p class="seat-selected">Seat(s) selected: <span>25</span></p>
            <p class="date-of-travel">
              Date of travel: <span>23/04/2023</span>
            </p>
            <p class="departure-time">Departure time: <span>5:00PM</span></p>
            <p class="total-cost">Amount: <span>2500 </span></p>
          </fieldset>
          <fieldset class="customer-information">
            <legend>customer details</legend>
            <form action="#" class="customer-details">
              <label for="name">Name</label>
              <input type="text" id="name" />
              <label for="mpesa-number"
                >Mobile number <strong>(M-pesa)</strong></label
              >
              <input type="tel" id="mpesa-number" />
              <p id="errorMessages" style="color: red"></p>
            </form>
          </fieldset>
        </div>
        <div class="booking-info-details">
          <fieldset>
            <legend>Payment</legend>
            <form action="#">
              <input
                type="radio"
                name="payment-option"
                value="M pesa"
                id="mpesa-option"
                checked
              />
              <label for="mpesa-option">M pesa</label>
              <br />
              <input
                type="radio"
                name="payment-option"
                value="Bank card"
                id="bank-card"
                disabled
              />
              <label for="bank-card">Bank card (Not currently available)</label>
            </form>
            <div class="payment-guide">
              <ol>
                <li>Click on the confirm payment button.</li>
                <li>
                  A pop up link will be sent to your phone via the number you
                  entered.
                </li>
                <li>Enter your pin and confirm payment.</li>
                <li>
                  On successful payment, you will be redirected to view and
                  download your ticket.
                </li>
              </ol>
            </div>
          </fieldset>
        </div>
        <div class="checkout-details">
          <fieldset class="terms-and-conditions">
            <legend>Terms and conditions</legend>
            <ol>
              <li>Payment fee is non-refundable once booked.</li>
              <li>Items over 15 kg have to be paid for.</li>
              <li>Arrive 30 minutes before departure time.</li>
              <li>No drugs are allowed during travel.</li>
            </ol>
          </fieldset>
          <div class="checkout-button">
            <button type="button" id="js-checkout-button" class="open-modal">
              CONFIRM PAYMENT
            </button>
          </div>
        </div>

        <dialog class="modal">
          <h2>Success! Thankyou for choosing to travel with us</h2>
          <p>
            Your ticket has been booked succesfully! A message has been sent to
            your phone with the ticket details. Additionally, you can close this
            modal to download your ticket.
          </p>
          <form class="modal-form">
            <button type="button" class="close-modal download-ticket">
              Exit and download ticket
            </button>
            <button class="close-modal redirect-home">
              Go back to homepage
            </button>
          </form>
        </dialog>
      </div>
    </main>

    <script src="/TransitEase_travel_agency/scripts/General scripts/generate_navigation.js"></script>
    <script src="/TransitEase_travel_agency/scripts/TicketBookingPage/checkout.js"></script>
    <script src="/TransitEase_travel_agency/scripts/General scripts/toggleModal.js"></script>
  </body>
</html>