async function editServiceHandler(event) {
	event.preventDefault();
	const service_name = document.querySelector('#edit-service-name').value.trim();
	const description = document.querySelector('#edit-service-description').value.trim();
	const service_price = document.querySelector('#edit-service-price').value.trim();
	const response = await fetch (`/api/services/:id`, {
		method: 'PUT',
		body: JSON.stringify({
			service_name,
			description,
			service_price,
		}),
		headers: { 'Content-Type': 'services.json' },
	})
	if (response.ok) {
		console.log(response)
		return response.status(200).json(response);
	} else {
		alert('Error: Service not edited')
	}
}
document.getElementById('.edit-service-form').addEventListener('click', editServiceHandler);
