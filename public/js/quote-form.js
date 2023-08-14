//require the pdfkit
const PDFDocument = require('pdfkit');


//write a function and template for the PDF
function generateQuotePDF() {
const doc = new PDFDocument;

//write to the PDF file
doc.pipe(fs.createWriteStream({{project.title}}'.pdf')); // write to PDF
doc.pipe(res);                                       // HTTP response

//PDF content
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
