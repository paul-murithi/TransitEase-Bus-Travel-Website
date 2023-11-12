// Get input elements
let inpt_to = document.getElementById("inpt-to");
let inpt_from = document.getElementById("inpt-frm");
let inpt_date = document.getElementById("inpt-date");

const travellingDate = document.getElementById("inpt-date");

//Get next button
const selectSeatsButton = document.getElementById("bkn-page-search-btn");
selectSeatsButton.addEventListener("click", navigateToSelectSeat);
// Function to navigate the user to seat selection page.
function navigateToSelectSeat() {
  inpt_to = document.getElementById("inpt-to").value;
  inpt_from = document.getElementById("inpt-frm").value;
  inpt_date = document.getElementById("inpt-date").value;

  //validate all inputs are filled
  if (inpt_to && inpt_from && inpt_date) {
    // Construct the URL with parameters
    const url = `/Booking/selectseat?to=${encodeURIComponent(
      inpt_to
    )}&from=${encodeURIComponent(inpt_from)}&date=${encodeURIComponent(
      inpt_date
    )}`;
    // Navigate to the selectSeat.html page
    window.location.href = url;
  } else {
    alert("Please fill out all inputs");
  }
}

//Get the select date of travel buttons
const addDateBtn = document.querySelectorAll(".addDate");
//Add event listeneres to thebuttons
addDateBtn.forEach((value, event) => {
  value.addEventListener("click", () => {
    addDate(event);
  });
});
// Function to allow the user to pick most common date. (today or tomorrow)
function addDate(event) {
  // Get the current date
  if (event === 0) {
    const currentDate = new Date();
    // Format the date as YYYY-MM-DD (required by the date input)
    const formattedDate = currentDate.toISOString().split("T")[0];
    // Set the value of the date input to today's date
    travellingDate.value = formattedDate;
  }
  // Get the following day's date
  else if (event === 1) {
    const currentDate = new Date();
    const tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(currentDate.getDate() + 1);

    // Format the date as YYYY-MM-DD (required by the date input)
    const formattedDate = tomorrowDate.toISOString().split("T")[0];

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

// Array of predefined destinations. To be fetched from the server in later updates
const destinations = [
  "Meru",
  "Nairobi",
  "Mombasa",
  "Nakuru",
  "Kisumu",
  "Naivasha",
  "Isiolo",
  "Narok",
  "Machakos",
  "Eldoret",
  "Voi",
  "Malindi",
  "Siaya",
  "Kakamega",
];

const inputFieldTo = document.getElementById("inpt-to");
const suggestionsContainerTo = document.getElementById(
  "js-suggestions-container-to"
);
const inputFieldFrom = document.getElementById("inpt-frm");
const suggestionsContainerFrom = document.getElementById(
  "js-suggestions-container-from"
);
const errorContainer = document.getElementById("error-container");

// Function to clear suggestions container
function clearSuggestionsContainer(container) {
  container.innerHTML = "";
}

// Function to clear error message
function clearError() {
  errorContainer.textContent = "";
}

// Function to handle suggestion click
function handleSuggestionClick(inputField, container, town) {
  inputField.value = town;
  clearSuggestionsContainer(container);
  clearError();
}

// Function to handle no matching suggestions found
function handleNoMatchingSuggestions() {
  errorContainer.textContent = "No matching destinations found";
}

// Function to update suggestions based on user input for a given input field and container
function updateSuggestions(inputField, container) {
  clearError();

  const userInput = inputField.value.toLowerCase();
  const matchingDestinations = destinations.filter((destination) =>
    destination.toLowerCase().includes(userInput)
  );

  clearSuggestionsContainer(container);

  if (matchingDestinations.length === 0) {
    handleNoMatchingSuggestions();
    return;
  }

  matchingDestinations.forEach((town) => {
    const elementNames = document.createElement("li");
    elementNames.classList.add("suggestion-list");
    elementNames.textContent = town;

    elementNames.addEventListener("click", () => {
      handleSuggestionClick(inputField, container, town);
    });

    container.appendChild(elementNames);
  });

  if (userInput === "") {
    container.classList.remove("suggestions-container-active");
  } else {
    container.classList.add("suggestions-container-active");
  }
}

inputFieldTo.addEventListener("input", () => {
  updateSuggestions(inputFieldTo, suggestionsContainerTo);
});

inputFieldFrom.addEventListener("input", () => {
  updateSuggestions(inputFieldFrom, suggestionsContainerFrom);
});
