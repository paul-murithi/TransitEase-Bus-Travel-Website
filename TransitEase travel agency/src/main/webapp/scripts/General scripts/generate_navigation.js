const navigationItems = [
  {
    site: "Home",
    href: "/TransitEase_travel_agency/Pages/Homepage/index.jsp"
  },
  {
    site: "Destinations",
    href: "#"
  },
  {
    site: "Book now",
    href: "/TransitEase_travel_agency/Pages/Ticket_Booking_Page/index.html"
  },
  {
    site: "Log in",
    href: "/TransitEase_travel_agency/Pages/login_page/index.html"
  },
  {
    site: "Sign up",
    href: "/TransitEase_travel_agency/Pages/sign_up/index.html"
  }
];
const pageBanner = {
  img: '/TransitEase_travel_agency/Assets/images/7c829fba9e354e7d96fe6a44cd79f823.png',
  alt: 'Banner logo'
}

function generateNavigationMenu() {
  const navigationMenu = document.getElementById("navigation-menu");

  const navData = navigationItems.map(link => `
    <li><a href="${link.href}">${link.site}</a></li>
  `).join("");

  navigationMenu.innerHTML += `
    <div class="nav-links">
      <img src = "${pageBanner.img}" alt = "${pageBanner.alt}">
      <ul class = "nav-data" data-visible = "false">${navData}</ul>
      <button class = "toggle-nav-bar">
        <img src = "/TransitEase_travel_agency/Assets/icons/bars-solid.svg" alt = "toggle nav bar">
      </button>
    </div>
  `;
}

generateNavigationMenu();

// Toggle the mobile responsive buttons
const primaryNavigation = document.querySelector('.nav-data');
const toggleButton = document.querySelector('.toggle-nav-bar');
toggleButton.addEventListener('click', handleMobileNavbar);

function handleMobileNavbar() {
  const navDataAttribute = primaryNavigation.getAttribute("data-visible");
  const logPage = document.querySelector(".login-container");
  if (navDataAttribute === "false") {
    primaryNavigation.setAttribute("data-visible", true);
    try {
      logPage.classList.remove('login-opacity-true');
    } catch (error) {
      return;
    }
  }
  else if (navDataAttribute === "true") {
    primaryNavigation.setAttribute("data-visible", false);
    try {
      logPage.classList.add('login-opacity-true');
    } catch (error) {
      return;
    }
  }

}