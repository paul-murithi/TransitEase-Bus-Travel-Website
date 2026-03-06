/**
 * Javascript implementation after the user has succesfully registered
 */
// Get the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const formHeader = document.querySelector(".log-in-header");

// Check if the "registration" parameter is present and has a value of "success"
if (
  urlParams.has("registration") &&
  urlParams.get("registration") === "success"
) {
  formHeader.textContent =
    "You have succesfully registered! log in to continue";
} else {
  console.log("Query string is:" + queryString);
  console.log("Failed");
}
