//To dynamically generate web content.
const destinations = [
  {
    img: "/Assets/images/Rectangle 14 (1).png",
    destinationName: "Nairobi",
    duration: "10 Days Trip",
    amountSaved: "20%",
    iconImg: "/Assets/icons/navigation 1.svg",
  },
  {
    img: "/Assets/images/Rectangle 14.jpg",
    destinationName: "Mombasa",
    duration: "10 Days Trip",
    amountSaved: "15%",
    iconImg: "/Assets/icons/navigation 1.svg",
  },
  {
    img: "/Assets/images/Rectangle 14.png",
    destinationName: "Meru",
    duration: "10 Days Trip",
    amountSaved: "15%",
    iconImg: "/Assets/icons/navigation 1.svg",
  },
];
let destinationNames = "";
destinations.forEach((destinationInfo) => {
  destinationNames += `
    <div class="destination-1 destination">
        <img src="${destinationInfo.img}" alt="destination-1">
        <span class="destination-name">
            <p>${destinationInfo.destinationName}</p>
            <p>${destinationInfo.amountSaved}</p>
        </span>
        <div class="navigation">
            <img src="${destinationInfo.iconImg}" alt="nav">
            <p>${destinationInfo.duration}</p>
        </div>
    </div>`;
});
document.querySelector(".top-destinations").innerHTML = destinationNames;

const customerTestimonials = [
  {
    name: "Michael junior",
    residence: "Meru",
    tripsTravelled: 4,
    img: "/Assets/images/icons8-male-user-100.png",
    text: "I am thrilled with the platform! The seamless experience, innovative features, and excellent support truly set it apart. Using it has been a game-changer for my business. Highly recommended!",
  },
  {
    name: "Alex taylor",
    residence: "Mombasa",
    tripsTravelled: 6,
    img: "/Assets/images/icons8-male-user-100.png",
    text: "Exceptional service and outstanding results! The platform exceeded my expectations, providing a user-friendly interface and powerful tools. I appreciate the attention to detail and the positive impact it has had on my workflow.",
  },
  {
    name: "Oscar mwendarubiu",
    residence: "Meru",
    tripsTravelled: 10,
    img: "/Assets/images/icons8-male-user-100.png",
    text: "The platform is a gem! From its intuitive design to its robust functionality, it has transformed the way I work. The team behind it is dedicated, and the results speak for themselves. I couldn't be happier with my experience.",
  },
];
let customersHTML = "";
customerTestimonials.forEach((customer) => {
  customersHTML += `
        <div class="testimonials-content">
            <img src="${customer.img}" width="42px" height="42px">
            <p>${customer.text}</p>
            <h2>${customer.name}</h2>
            <p>${customer.residence}</p>
        </div>
    `;
});
document.querySelector(".testimonials").innerHTML = customersHTML;
