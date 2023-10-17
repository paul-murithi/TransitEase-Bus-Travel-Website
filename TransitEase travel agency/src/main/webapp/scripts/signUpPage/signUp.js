/**
 * Module to provide user feedback after success/unsuccessful registration
 */
const signUpButton = document.getElementById("js-sign-up");
signUpButton.addEventListener("click", validateForm);

const showError = document.querySelector(".error-display");

function validateForm(event) {
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;

  if (
    validatePassword() &&
    validateUsername(userName) &&
    validateEmail(email)
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

function validateUsername(username) {
  if (username) {
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
