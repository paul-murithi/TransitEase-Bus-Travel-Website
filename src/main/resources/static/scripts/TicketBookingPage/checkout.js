// Get the error output container
const errorMessageContainer = document.getElementById("errorMessages");
// Get CSRF token and header for secure requests
const csrfToken = document.querySelector("meta[name='_csrf']").content;
const csrfHeader = document.querySelector("meta[name='_csrf_header']").content;

// Add button event listener to the checkout button
const checkOutButton = document.getElementById("js-checkout-button");
checkOutButton.addEventListener("click", checkPhoneNumber);

/**
 * Function to check the phone number format and trigger server validation
 * @param {Event} event - The event object
 */
function checkPhoneNumber(event) {
  const phoneNumberInput = document.getElementById("mpesa-number").value;
  const phoneNumberPattern = /^\d{10}$/;

  // Validate phone number format
  if (!phoneNumberPattern.test(phoneNumberInput)) {
    // Display error message if validation fails
    errorMessageContainer.innerHTML =
      "Phone Number should contain exactly 10 digits.";
    event.preventDefault();
  } else {
    // Prevent default form submission and proceed with server validation
    event.preventDefault();
    serverValidation();
  }
}

/**
 * Function to perform server-side validation and handle the response
 */
function serverValidation() {
  fetch("/Booking/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      [csrfHeader]: csrfToken,
    },
    body: JSON.stringify({
      //request payload
    }),
  })
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Booking failed");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data after successful booking
      console.log(data);
      openModal(); // Open the modal after successful booking
    })
    .catch((error) => {
      // Handle errors during the request
      console.error(error);
    });
}
