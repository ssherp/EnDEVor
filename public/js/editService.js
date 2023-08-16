async function editServiceHandler(event) {
	event.preventDefault();
	const edit_service_name = document.querySelector('#edit-service-name').value.trim();
	const edit_description = document.querySelector('#edit-service-description').value.trim();
	const edit_service_price = document.querySelector('#edit-service-price').value.trim();

	const response = await fetch (`/api/services/:id`, {
		method: 'PUT',
		body: JSON.stringify({
			edit_service_name,
			edit_description,
			edit_service_price,
		}),
		headers: { 'Content-Type': 'services.json' },
	})
	if ((response.ok)) {
		document.location.replace('/services/');
	} else {
		alert('Error: Service not edited')
	}
}

async function editServiceHandler(event) {
	const edit_service_btn = document.getElementById('#edit-service-btn')
}

document.querySelector().addEventListener('submit', servicesListHandler);
document.querySelector().addEventListener('submit', editServiceHandler);