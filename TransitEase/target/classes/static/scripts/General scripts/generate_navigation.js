// Create navigation links
const navigationItems = [
  {
    site: "Home",
    href: "/",
  },
  {
    site: "Destinations",
    href: "/Destinations",
  },
  {
    site: "Book now",
    href: "/TicketBooking",
  },
  {
    site: "Log in",
    href: "/Login",
  },
  {
    site: "My account",
    href: "/MyAccount",
  },
];
// Generate page logo
const pageBanner = {
  img: "/Assets/images/7c829fba9e354e7d96fe6a44cd79f823.png",
  alt: "Banner logo",
};

// Function to generate nav menu
function generateNavigationMenu() {
  const navigationMenu = document.getElementById("navigation-menu");

  const navData = navigationItems
    .map(
      (link) => `
    <li><a href="${link.href}">${link.site}</a></li>
  `
    )
    .join("");
  // Append the link items
  navigationMenu.innerHTML += `
    <div class="nav-links">
      <img src = "${pageBanner.img}" alt = "${pageBanner.alt}">
      <ul class = "nav-data" data-visible = "false">${navData}</ul>
      <button class = "toggle-nav-bar">
        <img src = "/Assets/icons/bars-solid.svg" alt = "toggle nav bar">
      </button>
    </div>
  `;
}

generateNavigationMenu();

// Toggle the mobile responsive buttons active or hidden
const primaryNavigation = document.querySelector(".nav-data");
const toggleButton = document.querySelector(".toggle-nav-bar");
toggleButton.addEventListener("click", handleMobileNavbar);

function handleMobileNavbar() {
  const navDataAttribute = primaryNavigation.getAttribute("data-visible");
  const logPage = document.querySelector(".login-container");
  if (navDataAttribute === "false") {
    primaryNavigation.setAttribute("data-visible", true);
    try {
      logPage.classList.remove("login-opacity-true");
    } catch (error) {
      return;
    }
  } else if (navDataAttribute === "true") {
    primaryNavigation.setAttribute("data-visible", false);
    try {
      logPage.classList.add("login-opacity-true");
    } catch (error) {
      return;
    }
  }
}

// Toggle the navigation links active state if they are currently opened

// Get the current page URL
var currentPage = window.location.pathname;

// Get all the navigation links
var navLinks = document.querySelectorAll(".nav-data li a");

/*navLinks.forEach((link) => {
  if (link.href.includes(`${currentPage}`)) {
    link.classList.add("active");
  }
});*/
