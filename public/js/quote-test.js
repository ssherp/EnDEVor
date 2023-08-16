const createBtn = document.getElementById('#create-btn');

createBtn.addEventListener('click', pdfPage);

function pdfPage(event) {
    event.preventDefault();

    window.location.href="/quote-file";
};