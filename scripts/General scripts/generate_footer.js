const footer = document.createElement('footer');
function generateFooter() {

    const companyLogo = document.createElement('div');
    companyLogo.className = 'company-logo';
    companyLogo.innerHTML = `
      <img src="/images/7c829fba9e354e7d96fe6a44cd79f823.png" alt="logo">
      <p>Book your trip in minutes, get full control for much longer</p>
  `;

    const companyLinks = createLinks('Company', ['About', 'Careers', 'Contact']);
    const contactLinks = createLinks('Contacts', ['Help and FAQ', 'Contact us', 'Affiliates']);
    const moreLinks = createLinks('More', ['Book now', 'View offers', 'Blog']);
    const socialLinks = createSocialLinks('Socials', ['twitter', 'facebook', 'instagram']);

    footer.appendChild(companyLogo);
    footer.appendChild(companyLinks);
    footer.appendChild(contactLinks);
    footer.appendChild(moreLinks);
    footer.appendChild(socialLinks);

    document.body.appendChild(footer);
}

function createLinks(title, links) {
    const linksContainer = document.createElement('div');
    linksContainer.className = 'ft-links';

    const linksList = document.createElement('ul');
    linksList.className = 'links';

    const titleElement = document.createElement('li');
    titleElement.innerHTML = `<h1>${title}</h1>`;
    linksList.appendChild(titleElement);

    links.forEach(link => {
        const linkItem = document.createElement('li');
        linkItem.innerHTML = `<a href="#">${link}</a>`;
        linksList.appendChild(linkItem);
    });

    linksContainer.appendChild(linksList);
    return linksContainer;
}

function createSocialLinks(title, platforms) {
    const socialLinksContainer = document.createElement('div');
    socialLinksContainer.className = 'ft-links';

    const socialLinksList = document.createElement('ul');
    socialLinksList.className = 'links socials';

    const titleElement = document.createElement('li');
    titleElement.innerHTML = `<h1>${title}</h1>`;
    socialLinksList.appendChild(titleElement);

    platforms.forEach(platform => {
        const linkItem = document.createElement('li');
        linkItem.innerHTML = `<a href="#"><img src="/icons/icons8-${platform}.svg" alt="${platform}" title="Follow us on ${platform}"></a>`;
        socialLinksList.appendChild(linkItem);
    });

    socialLinksContainer.appendChild(socialLinksList);
    return socialLinksContainer;
}
generateFooter();


function generateAuthorContent() {
    let contentParagraphs = `
  <p class="author">Designed and created by Kirera Paul Murithi &copy;2023</p>
  <p class="author">Email:<a href="#">paulmurithi233@gmail.com</a></p>
  `;

    footer.insertAdjacentHTML('afterend', contentParagraphs); // Insert after the footer
}
generateAuthorContent();
