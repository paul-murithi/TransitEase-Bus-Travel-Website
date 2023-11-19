//Display the VIP seats
const vipSeats = document.querySelectorAll(".seat");
for (i = 0; i < 12; i++) {
  vipSeats[i].classList.add("vip");
}
//Event handlers for the seats
const seats = document.querySelectorAll(".seat");
seats.forEach((seat) => {
  if (seat.classList.contains("bookedSeat")) {
    seat.setAttribute("title", "This seat is already booked");
    seat.setAttribute("aria-disabled", "true");
    return;
  } else {
    seat.addEventListener("click", handleSeatSelection);
  }
});

// Handle seat selection
function handleSeatSelection(event) {
  // Toggle the selected state of the seat
  event.target.classList.toggle("selected");
}

// Get the list of selected seats
function getSelectedSeats() {
  const selectedSeats = Array.from(document.querySelectorAll(".seat.selected"));
  return selectedSeats.map((seat) => seat.textContent);
}

// Save the selected seats
function saveSelectedSeats(seats) {
  // You can store the selected seat numbers in a variable, send them to the server, or perform any other required action.
  // console.log('Selected seats:', seats);
  showCheckoutPage(seats);
}

// Proceed button click event
const proceedButton = document.getElementById("proceed-btn");
proceedButton.addEventListener("click", handleProceed);

// Handle proceed button click
function handleProceed() {
  const selectedSeats = getSelectedSeats();
  saveSelectedSeats(selectedSeats);
}

/*##########################################################*/
function showCheckoutPage(seats) {
  if (seats != "") {
    console.log("You have chose seat: " + seats);
    const seatsAsString = seats.join(" "); // Convert the array to a string
    const cleanedSeats = seatsAsString.trim().replace(/\s+/g, ",");

    const url = `/Booking/selectseat/checkout?seatNumber=${encodeURIComponent(
      cleanedSeats
    )}`;
    window.location.href = url;
  } else {
    alert("Please choose a seat");
  }
}
