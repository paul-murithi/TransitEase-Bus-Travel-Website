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
}

// Modal control code
const closeModal = document.querySelectorAll(".close-modal");
const modal = document.querySelector(".modal");

function openModal() {
  modal.showModal();
  modal.classList.add("active");
  applyStyle("active");
}
closeModal.forEach((button) => {
  button.addEventListener("click", closeModalFn);
});

function closeModalFn() {
  modal.close();
  modal.classList.remove("active");
  removeStyle();
}

// Blur the background when modal is open
const backPage = document.querySelector("body");

function applyStyle(condition) {
  if (condition === "active") {
    backPage.classList.add("blur-active");
  }
}
// Remove background blur after modal is closed
function removeStyle() {
  backPage.classList.remove("blur-active");
}

// Event listener to close the modal when the Escape key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalFn();
  }
});
