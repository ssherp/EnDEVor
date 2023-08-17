//Create a new service item and save it to the service model
    //create variables for the user inputs using querySelectors
    //addEventListener for the save/add button
        //call on the POST route to create new item
        //use the accurate parameters
            //name, description, and price
    //if the response.ok then redirect the user to the view-services page

//------------------------------ Query Selectors ------------------------------//

//User Input Selectors
const service_name = document.querySelector('#name-input').value.trim();
const service_description = document.querySelector('#floatingTextarea2').value.trim();
const service_price = document.querySelector('#price-input').value.trim();

//Add Item Selector
const addItemBtn = document.querySelector('#add-item');




//------------------------------ Create Service Item ------------------------------//

//using submit event listener, all changes will be at click of button in function.
async function addServiceItem(event) {
    event.preventDefault();

    // Sending response to add new service
    if (service_name && service_description && service_price) {
        const response = await fetch ('/api/services/', {
            method: 'POST',
            body: JSON.stringify({
                service_name,
                service_description,
                service_price,
            }),
            headers: { 'Content-Type': 'services/json' },
        })
        if (response.ok) {
            console.log(response)
            return response.status(200).json(response)
        }
        else {
            alert('Failed to add service');
        }
    }
};
document
    .querySelector('#add-service-form')
    .addEventListener('submit', addServiceItem)