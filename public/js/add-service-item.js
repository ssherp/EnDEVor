//Create a new service item and save it to the service model
//create variables for the user inputs using querySelectors
//addEventListener for the save/add button
//call on the POST route to create new item
//use the accurate parameters
//name, description, and price
//if the response.ok then redirect the user to the view-services page

//------------------------------ Event Listeners ------------------------------//

//Add Item Selector
const addItemBtn = document.querySelector('#add-item');
addItemBtn.addEventListener('submit', addServiceItem)





//------------------------------ Redirect User ------------------------------//

function backToServices() {
    window.location.href="/services";
}





//------------------------------ Create Service Item ------------------------------//

async function addServiceItem(event) {
    event.preventDefault();

    //User Input Selectors
    const service_name = document.querySelector('#name-input').value.trim();
    const service_description = document.querySelector('#description-input').value.trim();
    const service_price = document.querySelector('#price-input').value.trim();
    alert("Service added!");
    // Sending response to add new service
    if (service_name && service_description && service_price) {
        const response = await fetch('/api/services/', {
            method: 'POST',
            body: JSON.stringify({
                service_name,
                service_description,
                service_price,
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            console.log(response);
            backToServices()
        }
        else {
            alert('Failed to add service');
        }
    }
};