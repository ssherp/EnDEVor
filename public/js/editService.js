async function editServiceHandler(event) {
	event.preventDefault();
	const service_name = document.querySelector('#edit-service-name').value.trim();
	const description = document.querySelector('#edit-service-description').value.trim();
	const service_price = document.querySelector('#edit-service-price').value.trim();
	const response = await fetch (`/api/services/:id`, {
		method: 'PUT',
		where: '',
		body: JSON.stringify({
			service_name,
			description,
			service_price,
		}),
		headers: { 'Content-Type': 'services.json' },
	})
	if ((response.ok)) {
		document.location.replace('/services/');
	} else {
		alert('Error: Service not edited')
	}
}

document.getElementById('#edit-service-btn').addEventListener('submit', editServiceHandler);
document.getElementById('#edit-service-btn').addEventListener('click', editServiceHandler)