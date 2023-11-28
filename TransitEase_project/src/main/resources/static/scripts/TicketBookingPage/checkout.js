// Get the error output
const errorMessageContainer = document.getElementById("errorMessages");
const csrfToken = document.querySelector("meta[name='_csrf']").content;
const csrfHeader = document.querySelector("meta[name='_csrf_header']").content;

// Add button event listener
const checkOutButton = document.getElementById("js-checkout-button");
checkOutButton.addEventListener("click", checkPhoneNumber);

function checkPhoneNumber(e) {
  const phoneNumberInput = document.getElementById("mpesa-number").value;
  const phoneNumberPattern = /^\d{10}$/;
  if (!phoneNumberPattern.test(phoneNumberInput)) {
    errorMessageContainer.innerHTML =
      "Phone Number should contain exactly 10 digits.";
    e.preventDefault();
    return;
  } else {
    e.preventDefault(); // Prevent the default form submission
    serverValidation();
  }
}

function serverValidation() {
  // Your fetch request
  fetch("/Booking/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      [csrfHeader]: csrfToken,
    },
    body: JSON.stringify({
      // Your request payload
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Booking failed");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data
      console.log(data);
      openModal(); // Open the modal after successful booking
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}
