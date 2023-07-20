
// Get the button element
const js_nextBtn = document.getElementById('bkn-page-search-btn');
js_nextBtn.addEventListener('click', handleNextBtn);


// Object to store the traveling info
const travelInfo = {};

// Function to display the different classes of travel  
function handleNextBtn() {
  // Get input elements
  const js_input_1 = document.getElementById('inpt-frm');
  const js_input_2 = document.getElementById('inpt-to');
  const js_input_3 = document.getElementById('inpt-date');
  const input_1 = js_input_1.value;
  const input_2 = js_input_2.value;
  const input_3 = js_input_3.value;

  // Add travel info to the object
  travelInfo.travellingFrom = input_1;
  travelInfo.travellingTo = input_2;
  travelInfo.dateOfTravel = input_3;

  // Check if the input elements are filled
  if (input_1 && input_2 && input_3) {
    const updatedElements = document.getElementsByClassName('bkn-level-dspl-item');
    for (let i = 0; i < updatedElements.length; i++) {
      updatedElements[i].classList.toggle('updatedList');
    } 
  } else {
    alert('Please fill in all the inputs');
  }
}

// Display the 3 classes of travel with the amount
// Function to check which class the customer has selected
let travelAmount;
const economyClass = document.getElementById('js-economy-class');
const businessClass = document.getElementById('js-business-class');
const vipClass = document.getElementById('js-VIP-class');

// Add event listeners for touch events
/*
economyClass.addEventListener('touchstart', () => {
  selectTravelClass('economy');
});
businessClass.addEventListener('touchstart', () => {
  selectTravelClass('business');
});
vipClass.addEventListener('touchstart', () => {
  selectTravelClass('VIP');
});
*/
// Add event listeners for mouse events
economyClass.addEventListener('click', () => {
  selectTravelClass('economy');
});
businessClass.addEventListener('click', () => {
  selectTravelClass('business');
});
vipClass.addEventListener('click', () => {
  selectTravelClass('VIP');
});

function selectTravelClass(travelClass) {
  if (travelClass === 'economy') {
    travelAmount = 2000;
    displayTravelInfo(2000, 'economy');
  } else if (travelClass === 'business') {
    travelAmount = 2500;
    displayTravelInfo(travelAmount, 'Business');
  } else if (travelClass === 'VIP') {
    travelAmount = 3000;
    displayTravelInfo(travelAmount, 'VIP');
  }
}

const display_seats_container = document.querySelector('.display-seats-container');
console.log(display_seats_container);

function displayTravelInfo(amount, travelClass) {
  const { dateOfTravel, travellingFrom, travellingTo } = travelInfo;
  const displayBusSeats = document.querySelector('.bkn-pg-main-item-1');

  display_seats_container.classList.toggle('updated-display-seats-container');
  displayBusSeats.innerHTML = "";
  displayBusSeats.appendChild(display_seats_container);

  const getAmount = document.getElementById('js-display-amount');
  const travellingDestination = document.getElementById('js-display-travelling-to');
  const travelSource = document.getElementById('js-display-travelling-from');
  const getDate = document.getElementById('js-display-travelling-date');
  const getTravelClass = document.getElementById('js-display-travelling-class');

  //display travelling information on page
  travelSource.innerText += travellingFrom;
  travellingDestination.innerText += travellingTo;
  getDate.innerText += dateOfTravel;
  getAmount.innerText += amount;
  getTravelClass.innerText += travelClass;
  /*
  To be used in updated versions of this project.
  element.innerHTML = `<ol>
                          <li>Date of travel: ${dateOfTravel}</li>
                          <li>From: ${travellingFrom}</li>
                          <li>To: ${travellingTo}</li>
                          <li>Amount: ${travelAmount}</li>
                          <li>Travelling class: ${travelClass}</li>
                          <button class = "bkn-proceed-btn" onclick = "displayBusSeats()">Proceed to booking</button>
                       </ol>`;
                       */

}




// Get the seat elements
const seatElements = document.querySelectorAll('.test-seat');
      
// Add event listener to each seat
seatElements.forEach(seat => {
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
  console.log('Selected seats:', seats);
}

// Proceed button click event
const proceedButton = document.getElementById('proceed-btn');
proceedButton.addEventListener('click', handleProceed);

// Handle proceed button click
function handleProceed() {
  const selectedSeats = getSelectedSeats();
  saveSelectedSeats(selectedSeats);
}