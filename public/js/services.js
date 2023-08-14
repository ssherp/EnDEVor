async function servicesListHandler(event) {
	event.preventDefault();
	const serviceAddBtn = document.querySelector('#serviceAddBtn');
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

document.querySelector('services-list').addEventListener('submit', servicesListHandler);

//refresher on fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch