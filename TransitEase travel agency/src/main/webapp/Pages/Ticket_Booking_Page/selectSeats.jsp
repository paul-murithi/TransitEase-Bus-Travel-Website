<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select seat</title>
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/Shared_styles/shared_styles.css"
    />
    <link
      rel="stylesheet"
      href="/TransitEase_travel_agency/Styles/TicketBookingPage/selectSeat/selectSeat.css"
    />
  </head>

  <body>
    <nav id="navigation-menu"></nav>
    <div class="travelling-info-banner">
      <h1>Select your seat</h1>
      <div class="destinations">
        <p id="Travel-from"></p>
        <img
          src="/TransitEase_travel_agency/Assets/images/icons8-bus-100 1.png"
          alt="bus icon"
        />
        <p id="travel-to"></p>
      </div>
      <p id="travel-date" class="date-style"></p>
      <div class="travel-info">
        <h1>Time of travel</h1>
        <p>
          <span id="travel-time"
            >6:00PM <span class="grayed-time">3:00PM</span></span
          >
        </p>
        <h1>Bus name and ID</h1>
        <p class="Bus name">FE-390 COACH</p>
        <h1>Amount</h1>
        <p id="amount">600 Kshs</p>
        <h1>Estimated time</h1>
        <p>9 hours</p>
      </div>
    </div>
    <p id="result"></p>
    <div class="display-seats-container">
      <div class="show-booking-information">
        <div class="key-map">
          <div class="keys vip-key"></div>
          <span>First class</span>
        </div>
        <div class="key-map">
          <div class="keys available-key"></div>
          <span>Available seats</span>
        </div>
        <div class="key-map">
          <div class="keys selected-seat-key"></div>
          <span>Your selected seats</span>
        </div>
        <div class="key-map">
          <div class="keys booked-key"></div>
          <span>Booked seats</span>
        </div>
      </div>
      <div class="seat-row-item">
        <table id="table-container">
          <tr>
            <th colspan="6">Select Your preffered bus seat</th>
          </tr>
          <tr class="row-1">
            <td>
              <div class="seat test-seat">1</div>
            </td>
            <td>
              <div class="seat seat-2 test-seat">2</div>
            </td>
            <td colspan="3" class="no-border"></td>
            <td class="driver-seat">Driver</td>
          </tr>

          <tr class="row-2">
            <td>
              <div class="seat test-seat">3</div>
            </td>
            <td>
              <div class="seat test-seat">4</div>
            </td>
            <td>
              <div class="seat test-seat">5</div>
            </td>
            <td class="no-border"></td>
            <td>
              <div class="seat test-seat">6</div>
            </td>
            <td>
              <div class="seat test-seat">7</div>
            </td>
          </tr>

          <tr class="row-3">
            <td>
              <div class="seat test-seat">8</div>
            </td>
            <td>
              <div class="seat test-seat">9</div>
            </td>
            <td>
              <div class="seat test-seat">10</div>
            </td>
            <td class="no-border"></td>
            <td>
              <div class="seat test-seat">11</div>
            </td>
            <td>
              <div class="seat test-seat">12</div>
            </td>
          </tr>

          <tr class="row-4">
            <td>
              <div class="seat test-seat">13</div>
            </td>
            <td>
              <div class="booked seat test-seat">14</div>
            </td>
            <td>
              <div class="booked seat test-seat">15</div>
            </td>
            <td class="no-border"></td>
            <td>
              <div class="seat test-seat">16</div>
            </td>
            <td>
              <div class="seat test-seat">17</div>
            </td>
          </tr>
          <tr class="row-5">
            <td>
              <div class="seat test-seat">18</div>
            </td>
            <td>
              <div class="seat test-seat">19</div>
            </td>
            <td>
              <div class="seat test-seat">20</div>
            </td>
            <td class="no-border"></td>
            <td>
              <div class="seat test-seat">21</div>
            </td>
            <td>
              <div class="booked seat test-seat">22</div>
            </td>
          </tr>
          <tr class="row-6">
            <td>
              <div class="seat test-seat">23</div>
            </td>
            <td>
              <div class="seat test-seat">24</div>
            </td>
            <td>
              <div class="seat test-seat">25</div>
            </td>
            <td class="no-border"></td>
            <td>
              <div class="seat test-seat">26</div>
            </td>
            <td>
              <div class="seat test-seat">27</div>
            </td>
          </tr>
          <tr class="row-7">
            <td>
              <div class="seat test-seat">28</div>
            </td>
            <td>
              <div class="seat test-seat">29</div>
            </td>
            <td>
              <div class="seat test-seat">30</div>
            </td>
            <td class="no-border"></td>
            <td>
              <div class="seat test-seat">31</div>
            </td>
            <td>
              <div class="booked seat test-seat">32</div>
            </td>
          </tr>
          <tr class="row-8">
            <td>
              <div class="seat test-seat">33</div>
            </td>
            <td>
              <div class="seat test-seat">34</div>
            </td>
            <td>
              <div class="seat test-seat">35</div>
            </td>
            <td class="no-border"></td>
            <td>
              <div class="seat test-seat">36</div>
            </td>
            <td>
              <div class="seat test-seat">37</div>
            </td>
          </tr>
          <tr class="row-9">
            <td>
              <div class="seat test-seat">38</div>
            </td>
            <td>
              <div class="seat test-seat">39</div>
            </td>
            <td>
              <div class="seat test-seat">40</div>
            </td>
            <td>
              <div class="seat test-seat">41</div>
            </td>
            <td>
              <div class="seat test-seat">42</div>
            </td>
            <td>
              <div class="seat test-seat">43</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="check-out-btn-item">
      <button class="check-out-btn" id="proceed-btn">
        Confirm and checkout
      </button>
    </div>
    <script src="/TransitEase_travel_agency/scripts/TicketBookingPage/generatepage.js"></script>
    <script src="/TransitEase_travel_agency/scripts/General scripts/generate_navigation.js"></script>
  </body>
</html>
