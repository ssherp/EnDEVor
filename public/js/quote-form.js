//Require the pdfkit package
const PDFDocument = require('pdfkit');



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

//Client Contact Section
const clientContactInfo = clientFirst + " " + clientLast + "\n" + clientEmail + "\n" + clientPhone;
const clientAddressInfo = clientAddress + "\n" + clientAddress2 + "\n" + clientCity + ", " + clientState + " " + clientZip;

//Service Query Selectors
const itemQuantity = document.querySelector('#itemQuantity').value.trim();
const serviceName = document.querySelector('#serviceName').value.trim();
const notes = document.querySelector('#floatingTextarea2').value.trim();



//------------------------------ Get User Info ------------------------------//
//TODO:
//User Info
//pull information from the user model
const userFirst = ;//user first name
const userLast = ;//user last name
const userEmail = ;//user email
const userPhone = ;//user phone number

//User Contact Section
const userContactInfo = userFirst + " " + userLast + "\n" + userEmail + "\n" + userPhone



//------------------------------ Event Listener Buttons ------------------------------//
//Add & Create Buttons
const addQuoteItemBtn = document.querySelector("#add-item");
const createQuotePDFBtn = document.getElementById("#submit");


//Event Listener for adding a new quote item
addQuoteItemBtn.addEventListener("click", addQuoteItem);

//Event Listener for creating quote with user inputs
createQuotePDFBtn.addEventListener("click", createQuotePDF);



//------------------------------ Add Service Options ------------------------------//

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('serviceName');

    // Function to populate select dropdown with services
    async function populateDropdown() {
      try {
        const response = await fetch('/services');
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
function addQuoteItem() {
    //copy the select element
    const firstItem = document.getElementById('serviceName');
    const newItem = firstItem.cloneNode(true);

    //Make new selection value is cleared
    newSelect.selectedIndex = 0;

    //Append the new select element
    const container = document.getElementById('service-item');
    container.appendChild(newSelect);

    //Set info for new button
    const addButton = document.createElement('button');
    addButton.className = 'add-item';
    addButton.type = 'button';
    addButton.textContent = 'Add Item';

    //Add event listener for the new button to repeat the same steps
    addButton.addEventListener('click', addQuoteItem);

    //Replace the original Add Item button with the new one
    const existingButton = document.querySelector('.add-item');
    container.replaceChild(addButton, existingButton);
};



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
};