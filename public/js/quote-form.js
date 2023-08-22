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
const service_id = document.querySelector('#serviceId').value;
const service_price = document.querySelector('#id-price').value;
const notes = document.querySelector('#notes').value.trim();





//------------------------------ Calculate Total Price ------------------------------//

//Get Each Line Item
const subtotalElements = document.querySelectorAll(".get-subtotal");

const subtotals = [];

//Calculate Each Line Item Subtotal
subtotalElements.forEach((subtotalElement) => {
    //Quantity
    const qtyElement = subtotalElement.querySelector(".qty");
    //Price
    const priceElement = subtotalElement.querySelector(".id-price");
    //Total Line Item Price Display
    const totalItemPriceElement = subtotalElement.querySelector(".total-item-price");

    //Make Integers
    const item_qty = parseFloat(qtyElement.textContent);
    const item_price = parseFloat(priceElement.textContent);

    //Calculate Total
    const subtotal = item_qty * item_price;
    //Push Totals into the Array
    subtotals.push(subtotal);

    //Set Total to Div
    totalItemPriceElement.textContent = subtotal;

});





//------------------------------ Create the Quote ------------------------------//

async function addNewQuote(event) {
    event.preventDefault();


    //----- Query Selectors -----//

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

    //Notes Query Selector
    const notes = document.querySelector('#notes').value;

    //Quote Item Query Selectors
    const quoteItems = []; // Array to hold the quote items
    // Collect all the quote items
    const quoteItemInputs = document.querySelectorAll('.service-item');
    quoteItemInputs.forEach((quoteItemInput) => {
        const quantity = quoteItemInput.querySelector('.quantity').value;
        const name = quoteItemInput.querySelector('.name').value;
        const subtotal = quoteItemInput.querySelector('.subtotal').value;

        quoteItems.push({ quantity, name, subtotal });
    });



    // Sending response to add a new quote
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
            quote_items: quoteItems, // Send the array of quote items
            total_price,
            notes
        }),
        headers: { 'Content-Type': 'application/json' }, // Correct the content type
    });

    if (response.ok) {
        document.location.replace('/quote-file');
    } else {
        alert('Failed to add a new quote.');
    }
}