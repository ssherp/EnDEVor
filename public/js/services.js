async function servicesListHandler(event) {
	event.preventDefault();
	const serviceAddBtn = document.querySelector('#serviceAddBtn');
	const serviceName = document.querySelector('#service-name').value;
	const servicePrice = document.querySelector('#service-price').value;
	const serviceDescription = document.querySelector('#service-description').value


}

document.querySelector('services-list').addEventListener('submit', servicesListHandler);

