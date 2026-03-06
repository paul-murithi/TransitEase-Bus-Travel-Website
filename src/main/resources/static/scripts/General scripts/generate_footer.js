// Create the footer element
const footer = document.createElement("footer");

// Function to generate the footer content
function generateFooter() {
  // Create company logo section
  const companyLogo = document.createElement("div");
  companyLogo.className = "company-logo";
  companyLogo.innerHTML = `
      <img src="/Assets/images/7c829fba9e354e7d96fe6a44cd79f823.png" alt="logo">
      <p>Book your trip in minutes, get full control for much longer</p>
  `;

  // Create different sections of links
  const companyLinks = createLinksSection("Company", [
    "About",
    "Careers",
    "Contact",
  ]);
  const contactLinks = createLinksSection("Contacts", [
    "Help and FAQ",
    "Contact us",
    "Affiliates",
  ]);
  const moreLinks = createLinksSection("More", [
    "Book now",
    "View offers",
    "Blog",
  ]);
  const socialLinks = createSocialLinksSection("Socials", [
    "twitter",
    "facebook",
    "instagram",
  ]);

  // Append all sections to the footer
  footer.appendChild(companyLogo);
  footer.appendChild(companyLinks);
  footer.appendChild(contactLinks);
  footer.appendChild(moreLinks);
  footer.appendChild(socialLinks);

  // Append the footer to the body
  document.body.appendChild(footer);
}

// Function to create a section of links
function createLinksSection(title, links) {
  const linksContainer = document.createElement("div");
  linksContainer.className = "ft-links";

  const linksList = document.createElement("ul");
  linksList.className = "links";

  const titleElement = document.createElement("li");
  titleElement.innerHTML = `<h1>${title}</h1>`;
  linksList.appendChild(titleElement);

  // Create and append each link
  links.forEach((link) => {
    const linkItem = document.createElement("li");
    linkItem.innerHTML = `<a href="#">${link}</a>`;
    linksList.appendChild(linkItem);
  });

  linksContainer.appendChild(linksList);
  return linksContainer;
}

// Function to create a section of social links
function createSocialLinksSection(title, platforms) {
  const socialLinksContainer = document.createElement("div");
  socialLinksContainer.className = "ft-links";

  const socialLinksList = document.createElement("ul");
  socialLinksList.className = "links socials";

  const titleElement = document.createElement("li");
  titleElement.innerHTML = `<h1>${title}</h1>`;
  socialLinksList.appendChild(titleElement);

  // Create and append each social link
  platforms.forEach((platform) => {
    const linkItem = document.createElement("li");
    linkItem.innerHTML = `<a href="#"><img src="/Assets/icons/icons8-${platform}.svg" alt="${platform}" title="Follow us on ${platform}"></a>`;
    socialLinksList.appendChild(linkItem);
  });

  socialLinksContainer.appendChild(socialLinksList);
  return socialLinksContainer;
}

// Generate the footer content
generateFooter();

// Function to generate author content
function generateAuthorContent() {
  const currentDate = new Date();
  const authorContent = `
  <p class="author">Designed and created by Kirera Paul Murithi &copy; ${currentDate.getFullYear()}</p>
  <p class="author">Email:<a href="mailto:paulmurithi233@gmail.com">paulmurithi233@gmail.com</a></p>
  `;

  // Insert the author content after the footer
  footer.insertAdjacentHTML("afterend", authorContent);
}

// Generate the author content
generateAuthorContent();
