//require the pdfkit
const PDFDocument = require('pdfkit');

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

//User Info
//pull information from the profile model
const logo = //user logo (if uploaded)
const userFirst

//Generate the PDF
function generateQuotePDF() {
const doc = new PDFDocument;

//Write the PDF File
doc.pipe(fs.createWriteStream(projectTitle + '.pdf'));
doc.pipe(res);// HTTP response

//Header
doc.font('san serif').fontSize(18).text('Quote', { align: 'center'});
doc.moveDown(1);

//Insert quote data
doc.text(`Project Title: ${quoteData.projectTitle}`);

doc.font('san serif').fontSize(18).text('Quote', { align: 'center'});
doc.moveDown(3);

// finalize the PDF and end the stream
doc.end();
}



//=======================================================//

const fs = require('fs');

fs.writeFile($(project.title)`.pdf`, quoteData, function (err) {
    if (err) throw err;
    console.log('PDF created');
});
