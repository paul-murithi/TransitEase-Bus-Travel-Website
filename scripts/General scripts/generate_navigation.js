const header = document.querySelector('header');

const navigationContainer = document.createElement('nav');
const navigationImage = document.createElement('div');
navigationImage.classList.add('nav-img');
const navigationLinks = document.createElement('div');
navigationLinks.classList.add('nav-links');
const navigationUnorderedList = document.createElement('ul');

const loadContent = document.querySelector('.js-nav-load');
loadContent.append(navigationContainer);
navigationContainer.appendChild(navigationLinks);
navigationLinks.appendChild(navigationUnorderedList);

const navigationItems = ["Home", "Destinations","Flights", "Book now","Log in", "Sign up", "Products"];
const pageNames = ["/Homepage/index", "#", "#", "/Ticket_Booking_page/index", "/login_page/index", "/Sign up/index", "#"];

for (let i = 0; i < navigationItems.length; i++) {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.innerText = navigationItems[i];
  anchor.href = pageNames[i] + ".html"; // Set the href attribute
  listItem.appendChild(anchor);
  navigationUnorderedList.appendChild(listItem);
}