//------------------------------ Populate Quote Item Dropdown ------------------------------//

//Query Selectors
const serviceNameSelect = document.getElementById('#serviceName');

//Populate Dropdown
async function populateServiceDropdown() {
    try {
        const response = await fetch('/api/quote_items');
        const quoteItems = await response.json();

        quoteItems.forEach((quoteItem) => {
            const option = document.createElement('option');
            option.value = quoteItem.service_id;
            option.textContent = `Quantity: ${quoteItem.quantity}, Service ID: ${quoteItem.service_id}`;
            serviceNameSelect.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}

//Call the function
populateServiceDropdown();





//------------------------------ Add Quote Item ------------------------------//

//Query Selectors
const itemsContainer = document.getElementById('service-items-container');
const firstItem = document.getElementById('service-item')
const addItemBtn = document.getElementById('add-item');


//Add New Quote Item Option
function addQuoteItem(event) {
    event.preventDefault();

    console.log('Add item button is clicked');

    const newItem = firstItem.cloneNode(true);
    itemsContainer.appendChild(newItem);

}

//Event Listener
addItemBtn.addEventListener('click', addQuoteItem);





//------------------------------ Query Selectors ------------------------------//

//Project Query Selectors
const project_title = document.querySelector('#project-title').value.trim().replace(' ', '-');
const project_due_date = document.querySelector('#project-due-date').value;


//Developer Info
const user_first = document.querySelector('#user-first').value.trim();
const user_last = document.querySelector('#user-last').value.trim();
const user_email = document.querySelector('#user-email').value.trim();
const user_phone = document.querySelector('#user-phone').value.trim();


//Client Query Selectors
const client_first = document.querySelector('#client-first').value.trim();
const client_last = document.querySelector('#client-last').value.trim();
const client_email = document.querySelector('#inputEmail4').value.trim();
const client_phone = document.querySelector('#client-phone').value.trim();
const client_address = document.querySelector('#inputAddress').value.trim();
const client_address_2 = document.querySelector('#inputAddress2').value.trim();
const client_city = document.querySelector('#inputCity').value.trim();
const client_state = document.querySelector('#inputState').value;
const client_zip = document.querySelector('#inputZip').value.trim();


//Service Query Selectors
const quantity = document.querySelector('#itemQuantity').value.trim();
const service_id = document.querySelector('#serviceId').value;
const item_name = document.querySelector('#id-name').value;
const service_price = document.querySelector('#id-price').value;
const subtotal = document.querySelector('#subtotal').value;
const notes = document.querySelector('#notes').value.trim();





//------------------------------ Calculate Total Price ------------------------------//

//Get Each Line Item
const subtotalElements = document.querySelectorAll(".get-subtotal");

//Calculate Each Line Item Subtotal
subtotalElements.forEach((subtotalElement) => {
    //Quantity
    const qtyElement = subtotalElement.querySelector(".qty");
    //Price
    const priceElement = subtotalElement.querySelector(".id-price");
    //Total Line Item Price Display
    const totalItemPriceElement = subtotalElement.querySelector(".total-item-price");

    //Make Integers
    const item_qty = parseInt(qtyElement.textContent);
    const item_price = parseInt(priceElement.textContent);

    //Calculate Total
    const subtotal = item_qty * item_price;

    //Set Total to Div
    totalItemPriceElement.textContent = subtotal;

});





//------------------------------ Create the Quote Item POST ------------------------------//

async function addNewQuoteItem() {

    // Sending response to add new quote item
    const response = await fetch(`/api/quote_items`, {
        method: 'POST',
        body: JSON.stringify({
            quantity,
            item_name,
            subtotal,
            quote_id
        }),
        headers: { 'Content-Type': 'quote_item/json' },
    })
    if (response.ok) {
        addNewQuote();
    } else {
        alert('Failed to add new quote.');
    }
}





//------------------------------ Create the Quote POST ------------------------------//

async function addNewQuote(event) {
    event.preventDefault();

    // Sending response to add new quote
    const response = await fetch(`/api/quotes`, {
        method: 'POST',
        body: JSON.stringify({
            project_title,
            project_due_date,
            user_first,
            user_last,
            user_email,
            user_phone,
            client_first,
            client_last,
            client_email,
            client_phone,
            client_address,
            client_address_2,
            client_city,
            client_state,
            client_zip,
            quote_items,
            total_price,
            notes
        }),
        headers: { 'Content-Type': 'quotes/json' },
    })
    if (response.ok) {
        document.location.replace('/quote-file');
    } else {
        alert('Failed to add new quote.');
    }
}
