/**
 *
 */
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
