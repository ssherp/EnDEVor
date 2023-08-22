//------------------------------ Event Listeners ------------------------------//

const { create } = require("express-handlebars");

//Download Button
const downloadBtn = document.querySelector('#download');
downloadBtn.addEventListener('click', downloadQuote);





//------------------------------ Download Quote ------------------------------//

//Allows Window Download
function downloadQuote(event) {
    event.preventDefault();

    window.print();
};




