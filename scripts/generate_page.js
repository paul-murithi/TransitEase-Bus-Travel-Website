//Add event listeneres to thebuttons
const addDateBtn = document.querySelectorAll('.addDate');
addDateBtn.forEach((value, event) => {
    value.addEventListener('click', () => {
        addDate(event);
    });
});

//get the input elements
const travellingDate = document.getElementById('travel-date');
const travellingTo = document.getElementById('travel-to');
const travellingFrom = document.getElementById('travel-from');

function addDate(event) {
    
    if(event === 0) {
        // Get the current date
        const currentDate = new Date();
        // Format the date as YYYY-MM-DD (required by the date input)
        const formattedDate = currentDate.toISOString().split('T')[0];
    
        // Set the value of the date input to today's date
        travellingDate.value = formattedDate;
    }
    else if(event === 1) {
        const currentDate = new Date();
    
        // Add one day to the current date
        const tomorrowDate = new Date(currentDate);
        tomorrowDate.setDate(currentDate.getDate() + 1);
    
        // Format the date as YYYY-MM-DD (required by the date input)
        const formattedDate = tomorrowDate.toISOString().split('T')[0];
    
        // Set the value of the date input to tomorrow's date
        travellingDate.value = formattedDate;
    }
}
