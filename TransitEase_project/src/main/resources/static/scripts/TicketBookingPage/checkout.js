//Get the input elemments
const phoneNumberInput = document.getElementById("mpesa-number");
const nameInput = document.getElementById("name");

// Get the error output
const errorMessageContainer = document.getElementById("errorMessages");

// Add button event listener
const checkOutButton = document.getElementById("js-checkout-button");
checkOutButton.addEventListener("click", validateForm);

function validateForm() {
  errorMessageContainer.innerHTML = "";
  // Check if all inputs are filled
  const phoneNumber = phoneNumberInput.value;
  if (nameInput.value === "" && phoneNumberInput.value === "") {
    errorMessageContainer.innerHTML = "Name and Phone Number are required.";
    return;
  }

  if (nameInput.value === "") {
    errorMessageContainer.innerHTML = "Name is required.";
    return;
  }

  if (phoneNumberInput.value === "") {
    errorMessageContainer.innerHTML = "Phone Number is required.";
    return;
  }

  // Check if the mobile number format is correct
  const phoneNumberPattern = /^\d{10}$/;
  if (!phoneNumberPattern.test(phoneNumberInput.value)) {
    errorMessageContainer.innerHTML =
      "Phone Number should contain exactly 10 digits.";
    return;
  }

  // If validateForm is true, open the modal
  openModal();
  SaveBookingToServer(phoneNumber);
}
