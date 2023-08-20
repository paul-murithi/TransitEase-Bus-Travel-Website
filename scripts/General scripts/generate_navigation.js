const navigationItems = [
  {
    site: "Home",
    href: "/Pages/Homepage/index.html"
  },
  {
    site: "Destinations",
    href: "#"
  },
  {
    site: "Flights",
    href: "#"
  },
  {
    site: "Book now",
    href: "/Pages/Ticket_Booking_page/index.html"
  },
  {
    site: "Log in",
    href: "/Pages/login_page/index.html"
  },
  {
    site: "Sign up",
    href: "/Pages/Sign up/index.html"
  },
  {
    site: "Products",
    href: "#"
  }
];

function generateNavigationMenu() {
  const navigationMenu = document.getElementById("navigation-menu");

  const navData = navigationItems.map(link => `
    <li><a href="${link.href}">${link.site}</a></li>
  `).join("");

  navigationMenu.innerHTML = `
    <div class="nav-links">
      <ul>${navData}</ul>
    </div>
  `;
}

generateNavigationMenu();
