//using submit event listener, all changes will be at click of button in function.

//grab all html names from partials, used service_name so name doesn't have line through it


const addServiceBtn = document.getElementById('add-service-btn');
// Sending response to add new service


async function addServicePost(event) {
	event.preventDefault();

	const serviceName = document.getElementById('post-service-name').value.trim();
	const serviceDescription = document.getElementById('post-service-description').value.trim();
	const servicePrice = document.getElementById('post-service-price').value.trim();
	const response = await fetch('/api/services', {
			method: 'POST',
			body: JSON.stringify({ serviceName, serviceDescription, servicePrice }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	if (response.ok) {
		document.location.replace('/');
	} else {
		alert('Failed to add service')
	}
}
document.getElementById('add-service-form').addEventListener('submit',addServicePost);
//saw headers on link below
//refresher on fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//refresher https://handlebarsjs.com/installation/#usage
