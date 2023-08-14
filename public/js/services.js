//using submit event listener, all changes will be at click of button in function.
async function servicesListHandler(event) {
	event.preventDefault();
	const service_name = document.querySelector('#service-name').value;
	const description = document.querySelector('#service-price').value;
	const service_price = document.querySelector('#service-description').value
	// Sending response to add new service
	const response = await fetch (`/api/services`, {
		method: 'POST',
		body: JSON.stringify({
			service_name,
			description,
			service_price,
		}),
		headers: { 'Content-Type': 'services/json' },
	})
	if (response.ok) {
		document.location.replace('/');
	} else {
		alert('Failed to add service');
	}
}

async function editServiceHandler(event) {
	event.preventDefault();
	const edit_name = document.querySelector('#edit-name').value;
	const edit_description = document.querySelector('#edit_description').value;
	const edit_price = document.querySelector('#edit-price').value;
}

document.querySelector('services-list').addEventListener('submit', servicesListHandler);
document.querySelector('edit-service').addEventListener('submit', editServiceHandler);

//refresher on fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch