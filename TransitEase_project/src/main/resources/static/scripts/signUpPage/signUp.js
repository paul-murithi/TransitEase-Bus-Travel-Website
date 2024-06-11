// /**
//  * Module to provide user feedback after success/unsuccessful registration
//  */
// const signUpButton = document.getElementById("js-sign-up");
// signUpButton.addEventListener("click", validateForm);

// const showError = document.querySelector(".error-display");

// function validateForm(event) {
//   const firstName = document.getElementById("firstName").value;
//   const secondName = document.getElementById("secondName").value;
//   const email = document.getElementById("email").value;
//   /* const phoneNo = document.getElementById("phoneNo").value;*/

//   if (
//     validatePassword() &&
//     validateUsername(firstName, secondName) &&
//     validateEmail(email)
//   ) {
//     document.getElementById("registrationForm").submit();
//     return false; // Prevent immediate form submission
//   } else {
//     event.preventDefault();
//   }
// }

// function validatePassword() {
//   const firstPassword = document.getElementById("password").value;
//   const confirmPassword = document.getElementById("confirm-password").value;

//   if (firstPassword === "" || confirmPassword === "") {
//     showError.textContent = "Password cannot be empty";
//     return false;
//   } else {
//     showError.textContent = "";
//   }

//   if (firstPassword === confirmPassword) {
//     showError.textContent = "";
//     return true;
//   } else {
//     showError.textContent = "Passwords do not match";
//     return false;
//   }
// }

// function validateUsername(firstName, secondName) {
//   if (firstName && secondName) {
//     return true;
//   } else {
//     showError.textContent = "Username cannot be empty";
//     return false;
//   }
// }

// function validateEmail(email) {
//   if (email) {
//     return true;
//   } else {
//     showError.textContent = "Invalid email";
//     return false;
//   }
// }
// function validatePhoneNumber(number) {
//   const phoneNumberPattern = /^\d{10}$/;
//   if (!phoneNumberPattern.test(number)) {
//     showError.textContent = "Phone Number should contain exactly 10 digits.";
//     return false;
//   } else {
//     return true;
//   }
// }
/**
 * Module to provide user feedback after successful/unsuccessful registration
 */

// Get the sign-up button element and add a click event listener to it
const signUpButton = document.getElementById("js-sign-up");
signUpButton.addEventListener("click", validateForm);

// Select the element to display error messages
const showError = document.querySelector(".error-display");

/**
 * Function to validate the entire form before submission
 * @param {Event} event - The event object
 */
function validateForm(event) {
  const firstName = document.getElementById("firstName").value;
  const secondName = document.getElementById("secondName").value;
  const email = document.getElementById("email").value;
  // const phoneNo = document.getElementById("phoneNo").value;

  // Check if all validations pass
  if (
    validatePassword() &&
    validateUsername(firstName, secondName) &&
    validateEmail(email)
    // && validatePhoneNumber(phoneNo)
  ) {
    document.getElementById("registrationForm").submit();
    return false; // Prevent immediate form submission
  } else {
    event.preventDefault(); // Prevent form submission if validation fails
  }
}

/**
 * Function to validate the password fields
 * @returns {boolean} - True if passwords are valid, false otherwise
 */
function validatePassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password === "" || confirmPassword === "") {
    showError.textContent = "Password cannot be empty";
    return false;
  }

  if (password === confirmPassword) {
    showError.textContent = "";
    return true;
  } else {
    showError.textContent = "Passwords do not match";
    return false;
  }
}

/**
 * Function to validate the username fields
 * @param {string} firstName - The user's first name
 * @param {string} secondName - The user's second name
 * @returns {boolean} - True if usernames are valid, false otherwise
 */
function validateUsername(firstName, secondName) {
  if (firstName && secondName) {
    showError.textContent = "";
    return true;
  } else {
    showError.textContent = "Username cannot be empty";
    return false;
  }
}

/**
 * Function to validate the email field
 * @param {string} email - The user's email
 * @returns {boolean} - True if the email is valid, false otherwise
 */
function validateEmail(email) {
  if (email) {
    showError.textContent = "";
    return true;
  } else {
    showError.textContent = "Invalid email";
    return false;
  }
}

/**
 * Function to validate the phone number field
 * @param {string} number - The user's phone number
 * @returns {boolean} - True if the phone number is valid, false otherwise
 */
function validatePhoneNumber(number) {
  const phoneNumberPattern = /^\d{10}$/;
  if (!phoneNumberPattern.test(number)) {
    showError.textContent = "Phone Number should contain exactly 10 digits.";
    return false;
  } else {
    showError.textContent = "";
    return true;
  }
}
