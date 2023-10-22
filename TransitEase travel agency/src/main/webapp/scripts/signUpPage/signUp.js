/**
 * Module to provide user feedback after success/unsuccessful registration
 */
const signUpButton = document.getElementById("js-sign-up");
signUpButton.addEventListener("click", validateForm);

const showError = document.querySelector(".error-display");

function validateForm(event) {
  const firstName = document.getElementById("firstName").value;
  const secondName = document.getElementById("secondName").value;
  const email = document.getElementById("email").value;
  const phoneNo = document.getElementById("phoneNo").value;

  if (
    validatePassword() &&
    validateUsername(firstName, secondName) &&
    validateEmail(email) &&
    validatePhoneNumber(phoneNo)
  ) {
    document.getElementById("registrationForm").submit();
    return false; // Prevent immediate form submission
  } else {
    event.preventDefault();
  }
}

function validatePassword() {
  const firstPassword = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (firstPassword === "" || confirmPassword === "") {
    showError.textContent = "Password cannot be empty";
    return false;
  } else {
    showError.textContent = "";
  }

  if (firstPassword === confirmPassword) {
    showError.textContent = "";
    return true;
  } else {
    showError.textContent = "Passwords do not match";
    return false;
  }
}

function validateUsername(firstName, secondName) {
  if (firstName && secondName) {
    return true;
  } else {
    showError.textContent = "Username cannot be empty";
    return false;
  }
}

function validateEmail(email) {
  if (email) {
    return true;
  } else {
    showError.textContent = "Invalid email";
    return false;
  }
}
function validatePhoneNumber(number){
	const phoneNumberPattern = /^\d{10}$/;
  	if (!phoneNumberPattern.test(number)) {
    showError.textContent =
      "Phone Number should contain exactly 10 digits.";
    return false;
  }
  else {
	  return true;
  }
}
