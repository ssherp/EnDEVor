//------------------------------ Query Selectors ------------------------------//

//create variables for the user inputs
//Project Query Selectors
const projectTitle = document.querySelector('#project-title').value.trim().replace(' ', '-');
const projectDueDate = document.querySelector('#project-due-date').value;

//Client Query Selectors
const clientFirst = document.querySelector('#client-first').value.trim();
const clientLast = document.querySelector('#client-last').value.trim();
const clientEmail = document.querySelector('#inputEmail4').value.trim();
const clientPhone = document.querySelector('#formGroupExampleInput').value.trim();
const clientAddress = document.querySelector('#inputAddress').value.trim();
const clientAddress2 = document.querySelector('#inputAddress2').value.trim();
const clientCity = document.querySelector('#inputCity').value.trim();
const clientState = document.querySelector('#inputState').value.trim();
const clientZip = document.querySelector('#inputZip').value.trim();

//Service Query Selectors
const itemQuantity = document.querySelector('#itemQuantity').value.trim();
const serviceName = document.querySelector('#serviceName').value.trim();
const notes = document.querySelector('#floatingTextarea2').value.trim();



//------------------------------ Get User Info ------------------------------//

//User Info
const userFirst = document.querySelector('#user-first').value.trim();
const userLast = document.querySelector('#user-last').value.trim();
const userEmail = document.querySelector('#user-email').value.trim();
const userPhone = document.querySelector('#user-phone').value.trim();
//User Contact Section
const userContactInfo = userFirst + " " + userLast + "\n" + userEmail + "\n" + userPhone



//------------------------------ Event Listener Buttons ------------------------------//

//Add & Create Buttons
// const addQuoteItemBtn = document.querySelector("#add-item");
// const createQuotePDFBtn = document.getElementById("#submit");


//Event Listener for adding a new quote item
// addQuoteItemBtn.addEventListener("click", addQuoteItem);

//Event Listener for creating quote with user inputs
// createQuotePDFBtn.addEventListener("click", createQuotePDF);



//------------------------------ Add Service Options ------------------------------//

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('serviceName');

    // Function to populate select dropdown with services
    async function populateDropdown() {
        try {
            const response = await fetch('/api/services');
            const services = await response.json();

            for (const service of services) {
                const option = document.createElement('option');
                option.value = service.id;
                option.textContent = service.name + "\n" + service.price;
                selectElement.appendChild(option);
            }
        } catch (error) {
            console.error(error);
        }
    }

    populateDropdown();
});



//------------------------------ Add Quote Item ------------------------------//

//Write a function to add a new line item for each new service added to the quote items
// function addQuoteItem() {
//     //copy the select element
//     const firstItem = document.getElementById('serviceName'); //global
//     const newSelect = firstItem.cloneNode(true);

//     //Make new selection value is cleared
//     newSelect.selectedIndex = 0;

//     //Append the new select element
//     const container = document.getElementById('service-item');
//     container.appendChild(newSelect);

//     //Set info for new button
//     const addButton = document.createElement('button');
//     addButton.className = 'add-item';
//     addButton.type = 'button';
//     addButton.textContent = 'Add Item';

//     //Add event listener for the new button to repeat the same steps
//     addButton.addEventListener('click', addQuoteItem);

//     //Replace the original Add Item button with the new one
//     const existingButton = document.querySelector('.add-item');
//     container.replaceChild(addButton, existingButton);
// };

const itemsContainer = document.getElementById('service-items-container');
const firstItem = document.getElementById('service-item')
const addItemBtn = document.getElementById('add-item');



function addQuoteItem(event) {
    event.preventDefault();

    console.log('Add item button is clicked');

    const newItem = firstItem.cloneNode(true);
    itemsContainer.appendChild(newItem);

}

addItemBtn.addEventListener('click', addQuoteItem);

//------------------------------ Add Total Price ------------------------------//

//write a function that adds the total price


//------------------------------ Create the Quote POST ------------------------------//

async function addNewQuote(event) {
    event.preventDefault();

    // Sending response to add new quote
    const response = await fetch(`/api/quotes`, {
        method: 'POST',
        body: JSON.stringify({
            project_title,
            project_due_date,
            userFirst,
            userLast,
            userEmail,
            userPhone,
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
        document.location.replace('/');
    } else {
        alert('Failed to add service');
    }
}

//------------------------------ Create the PDF ------------------------------//

//Generate the PDF
function createQuotePDF() {
    const doc = new PDFDocument({
        font: 'Helvetica',
        size: 'LETTER'
    });

    //Write the PDF File
    doc.pipe(fs.createWriteStream(projectTitle + '.pdf'));
    doc.pipe(res);// HTTP response

    //PDF Info
    doc
        .info({
            title: projectTitle,
            author: userFirst + " " + userLast,
        });

    //Project Title
    doc
        .font('Helvetica Bold', 20)
        .text(projectTitle + ' Quote', {
            align: left
        })
    doc.moveDown(2);

    //Project Estimated Due Date
    doc
        .font('Times New Roman', 16)
        .text('Estimated Completion: ' + projectDueDate)
    doc.moveDown(1);

    //User Info
    doc
        .font('Helvetica Bold', 12)
        .text('Developer:')
        .font(12)
        .text(userContactInfo, {
            align: left
        });
    doc.moveDown(1);

    //Client Info
    doc
        .font('Helvetica Bold', 12)
        .text('Client:')
        .font(12)
        .text(clientContactInfo, clientAddressInfo, {
            align: center,
            columns: 2,
            columnGap: 300
        });
    doc.moveDown(1);

    //Order Info
    doc
        .font('Helvetica Bold', 16)
        .text('Order')
        .moveDown()
        .font(12)
        .text(itemQuantity, serviceName, {
            align: center,
            columns: 2
        });
    doc.moveDown(1);

    //Total Price
    doc
        .font('Helvetica Bold', 12)
        .text('Total: ' + totalPrice, {
            align: right
        });
    doc.moveDown(1);

    //Notes
    doc
        .font('Helvetica Bold', 16)
        .text('Notes:')
        .moveDown()
        .font(12)
        .text(notes, {
            align: left,
        });
    doc.moveDown(1);

    //End PDF Stream
    doc.end();

    //Add to quotes
    addNewQuote();
};



const serviceNameSelect = document.getElementById('#serviceName');

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

populateServiceDropdown();