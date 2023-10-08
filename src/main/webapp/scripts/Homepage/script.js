//To dynamically generate web content.
const destinations = [
    {
        img: '/TransitEase_travel_agency/Assets/images/Rectangle 14 (1).png',
        destinationName: 'Nairobi',
        duration: '10 Days Trip',
        amountSaved: '$5,42k',
        iconImg: '/TransitEase_travel_agency/Assets/icons/navigation 1.svg'
    },
    {
        img: '/TransitEase_travel_agency/Assets/images/Rectangle 14.jpg',
        destinationName: 'Mombasa',
        duration: '10 Days Trip',
        amountSaved: '$5,42k',
        iconImg: '/TransitEase_travel_agency/Assets/icons/navigation 1.svg'
    },
    {
        img: '/TransitEase_travel_agency/Assets/images/Rectangle 14.png',
        destinationName: 'Meru',
        duration: '10 Days Trip',
        amountSaved: '$8,42k',
        iconImg: '/TransitEase_travel_agency/Assets/icons/navigation 1.svg'
    }
];
let destinationNames = '';
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
    </div>`
});
document.querySelector('.top-destinations').innerHTML = destinationNames;


const customerTestimonials = [
    {
        name: "Michael junior",
        residence: "Meru",
        tripsTravelled: 4,
        img: '/TransitEase_travel_agency/Assets/icons/Image.svg'
    },
    {
        name: "Alex taylor",
        residence: "Mombasa",
        tripsTravelled: 6,
        img: '/TransitEase_travel_agency/Assets/icons/Image.svg'
    },
    {
        name: "Oscar mwendarubiu",
        residence: "Meru",
        tripsTravelled: 10,
        img: '/TransitEase_travel_agency/Assets/icons/Image.svg'
    }
];
let customersHTML = '';
customerTestimonials.forEach((customer) => {
    customersHTML += `
        <div class="testimonials-content">
            <img src="${customer.img}" width="42px" height="42px">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur temporibus, dolorem necessitatibus maiores eaque dignissimos cumque possimus exercitationem iusto vero. Facere nisi corrupti dicta eaque iure recusandae cumque ipsam tempora.</p>
            <h2>${customer.name}</h2>
            <p>${customer.residence}</p>
        </div>
    `
});
document.querySelector('.testimonials').innerHTML = customersHTML;