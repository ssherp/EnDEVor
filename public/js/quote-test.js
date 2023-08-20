const createBtn = document.getElementById('#create-quote-form');

createBtn.addEventListener('click', pdfPage);

function pdfPage(event) {
    event.preventDefault();

    window.location.href="/quote-file";
};