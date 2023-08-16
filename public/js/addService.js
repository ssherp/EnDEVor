//using submit event listener, all changes will be at click of button in function.
async function servicesListHandler(event) {
	event.preventDefault();
	//grab all html names from partials, used service_name so name doesn't have line through it
	const service_name = document.querySelector('#service-name').value.trim();
	const description = document.querySelector('#service-price').value.trim();
	const service_price = document.querySelector('#service-description').value.trim();
	// Sending response to add new service
	const response = await fetch (`/api/services/`, {
		method: 'POST',
		body: JSON.stringify({
			service_name,
			description,
			service_price,
			user_id,
		}),
		headers: { 'Content-Type': 'services/json' }
	})
	.then(response => response.json(data))
	.then(data =>console.log(data));
	// if (response.ok) 
	// 	document.location.replace('/services/');
	// else {
	// 	alert('Failed to add service');
	// }
}
async function editServiceRoute()

document.querySelector('services-list').addEventListener('submit', servicesListHandler)
document.getElementById('#edit-service-btn').addEventListener('click', editServiceRoute)


//saw headers on link below
//refresher on fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//refresher https://handlebarsjs.com/installation/#usage