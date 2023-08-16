//using submit event listener, all changes will be at click of button in function.
async function addServiceHandler(event) {
	event.preventDefault();
	//grab all html names from partials, used service_name so name doesn't have line through it
	const service_name = document.querySelector('#input-service-name').value.trim();
	const description = document.querySelector('#input-service-description').value.trim();
	const service_price = document.querySelector('#input-service-price').value.trim();
	// Sending response to add new service
	if (service_name && description && service_price) { 
		const response = await fetch ('/api/services/', {
			method: 'POST',
			body: JSON.stringify({
				service_name,
				service_description,
				service_price,
			}),
			headers: { 'Content-Type': 'services/json' },
		})
		if (response.ok) {
			console.log(response)
			return response.status(200).json(response)
		} 
		else {
			alert('Failed to add service');
		} 
	}
};

document
	.querySelector('#add-service-form')
	.addEventListener('submit', addServiceHandler)

//saw headers on link below
//refresher on fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//refresher https://handlebarsjs.com/installation/#usage