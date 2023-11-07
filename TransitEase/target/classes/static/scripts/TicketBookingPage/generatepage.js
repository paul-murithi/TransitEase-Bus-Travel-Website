// Function to get URL parameters
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Retrieve the data from URL parameters
const whereTo = getURLParameter('to');
const whereFrom = getURLParameter('from');
const date = getURLParameter('date');

//Display data on page
const travelFrom = document.getElementById('Travel-from');
travelFrom.innerHTML = `<span>From: </span><span class = "travel-grp">${whereFrom}</span>`;
const travelTo = document.getElementById('travel-to');
travelTo.innerHTML = `<span>To: </span><span class = "travel-grp">${whereTo}</span>`;

const travelDate = document.getElementById('travel-date');
travelDate.innerHTML = `<strong>Date: </strong><strong class = "travel-grp">${date}</strong>`;

//Display the VIP seats
const vipSeats = document.querySelectorAll('.seat');
for (i = 0; i < 12; i++) {
  vipSeats[i].classList.add('vip');
}
//Event handlers for the seats
const seats = document.querySelectorAll('.test-seat');
seats.forEach((seat) => {
  seat.addEventListener('click', handleSeatSelection);
});

// Handle seat selection
function handleSeatSelection(event) {
  // Toggle the selected state of the seat
  event.target.classList.toggle('selected');
}

// Get the list of selected seats
function getSelectedSeats() {
  const selectedSeats = Array.from(document.querySelectorAll('.seat.selected'));
  return selectedSeats.map(seat => seat.textContent);
}

// Save the selected seats
function saveSelectedSeats(seats) {
  // You can store the selected seat numbers in a variable, send them to the server, or perform any other required action.
  showCheckoutPage(seats);
}

// Proceed button click event
const proceedButton = document.getElementById('proceed-btn');
proceedButton.addEventListener('click', handleProceed);

// Handle proceed button click
function handleProceed() {
  const selectedSeats = getSelectedSeats();
  saveSelectedSeats(selectedSeats);
}


/*##########################################################*/
function showCheckoutPage(seats) {
  if (seats != "") {
    console.log("You have chose seat: " + seats);
    const url = `checkout.jsp?seatNumber=${encodeURIComponent(seats)}`;
    window.location.href = url;
  }
  else {
    alert("Please choose a seat");
  }
}

