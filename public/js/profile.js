// Update profile form handler
const updateProfileFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#inputFirstName').value.trim();
    const lastName = document.querySelector('#inputLastName').value.trim();
  
    if (firstName && lastName) {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        body: JSON.stringify({ firstName, lastName, companyName,address,city,state,zip,email,phone,password}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // Reload the page to see updated information
        location.reload();
      } else {
        alert('Failed to update profile.');
      }
    }
  };
  
  // Attach the update profile form handler
  document
    .querySelector('#update-profile-form')
    .addEventListener('submit', updateProfileFormHandler);