// Get input elements
let inpt_to = document.getElementById('inpt-to');
let inpt_from = document.getElementById('inpt-frm');
let inpt_date = document.getElementById('inpt-date');

const travellingDate = document.getElementById('inpt-date');

//Get next button
const selectSeatsButton = document.getElementById('bkn-page-search-btn');
selectSeatsButton.addEventListener('click', navigateToSelectSeat);

function navigateToSelectSeat() {

    inpt_to = document.getElementById('inpt-to').value;
    inpt_from = document.getElementById('inpt-frm').value;
    inpt_date = document.getElementById('inpt-date').value;

    //validate all inputs are filled    
    if (inpt_to && inpt_from && inpt_date){
        // Construct the URL with parameters
        const url = `selectSeats.html?to=${encodeURIComponent(inpt_to)}&from=${encodeURIComponent(inpt_from)}&date=${encodeURIComponent(inpt_date)}`;
        // Navigate to the selectSeat.html page
        window.location.href = url;
    }
    else {
        alert("Please fill out all inputs");
    }
}



//Get the select date of travel buttons
const addDateBtn = document.querySelectorAll('.addDate');
//Add event listeneres to thebuttons
addDateBtn.forEach((value, event) => {
    value.addEventListener('click', () => {
        addDate(event);
    });
});

function addDate(event) {
    
    if(event === 0) {
        // Get the current date
        const currentDate = new Date();
        // Format the date as YYYY-MM-DD (required by the date input)
        const formattedDate = currentDate.toISOString().split('T')[0];
        // Set the value of the date input to today's date
        travellingDate.value = formattedDate;
    }
    else if(event === 1) {
        const currentDate = new Date();
        // Add one day to the current date
        const tomorrowDate = new Date(currentDate);
        tomorrowDate.setDate(currentDate.getDate() + 1);
    
        // Format the date as YYYY-MM-DD (required by the date input)
        const formattedDate = tomorrowDate.toISOString().split('T')[0];
    
        // Set the value of the date input to tomorrow's date
        travellingDate.value = formattedDate;
    }
}
/* // JavaScript
const dateDisplay = document.getElementById('date-display');

// Function to get the name of the day of the week
function getDayName(date) {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return dayNames[date.getDay()];
}

// Get the current date
const currentDate = new Date();

// Format the date including the day of the week
const formattedDate = `${getDayName(currentDate)}, ${currentDate.toLocaleDateString()}`;

// Display the formatted date on the webpage
dateDisplay.textContent = formattedDate;
*/