//Add Event Listener for the "ADD ITEM" button
    //Redirect to "ADD SERVICE HANDLEBAR"
        //getElementById
        //addEventListener
        //write a function
            //window.location.href="(file path)"
                //set up the route for the "add service item" handlebar

//------------------------------ Query Selectors ------------------------------//

//Add Item Selector
const addItemBtn = document.querySelector('#add-item');





//------------------------------ Event Listener ------------------------------//

//Add Item Button
addItemBtn.addEventListener('click', addServiceItem)





//------------------------------ Event Listener ------------------------------//

//Redirect User to Add Service
function addServiceItem(event) {
    event.preventDefault();

    window.location.href="/services/add-service-item";
};