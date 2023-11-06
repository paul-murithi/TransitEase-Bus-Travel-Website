/**
 * Module to edit passenger details and save the new data
 */
// Get the personal details inputs and button
const firstNameInput = document.getElementById("first-name");
const secondNameInput = document.getElementById("second-name");

// Get the personal details inputs and button
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

// Edit personal details
const editPersonalDetailsbtn = document.getElementById("edit-personal-details");
editPersonalDetailsbtn.addEventListener("click", () => {
  editValue([firstNameInput, secondNameInput]);
});

// Edit contact details
const editContactDetailsbtn = document
  .getElementById("edit-contact-details")
  .addEventListener("click", () => {
    editValue([emailInput, phoneInput]);
  });

/**
 * Function to edit the user details. Both personal and contact details
 * @param {*} values
 */
function editValue(values) {
  values.forEach((element) => {
    element.removeAttribute("disabled");
  });
}

// Save personal details
const savePersonalDetailsbtn = document
  .getElementById("save-personal-details")
  .addEventListener("click", () => {
    const inputElementsToSave = [firstNameInput, secondNameInput];

    saveAndDisableInputs(inputElementsToSave);
  });

// Save the contact details
const saveContactDetailsbtn = document
  .getElementById("save-contact-details")
  .addEventListener("click", () => {
    const inputElementsToSave = [emailInput, phoneInput];
    saveAndDisableInputs(inputElementsToSave);
  });

/**
 * Function to save and disable iputs after user has finished  making changes
 * @param {*} inputElements
 */
function saveAndDisableInputs(inputElements) {
  inputElements.forEach((inputElement) => {
    // Disable the input field
    inputElement.setAttribute("disabled", "true");

    // Get the updated value from the input
    const updatedValue = inputElement.value;

    // Set the updated value as the input's value attribute
    inputElement.setAttribute("value", updatedValue);
  });
}
