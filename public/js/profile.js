// Update profile form handler
const updateProfileFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#inputFirstName').value.trim();
    const lastName = document.querySelector('#inputLastName').value.trim();
    const companyName = document.querySelector('#inputCompanyName').value.trim();
    const address = document.querySelector('#inputAddress').value.trim();
    const city = document.querySelector('#inputCity').value.trim();
    const state = document.querySelector('#inputState').value.trim();
    const zip = document.querySelector('#inputZip').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const phone = document.querySelector('#inputPhone').value.trim();
  
    if (firstName && lastName) {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        body: JSON.stringify({ firstName, lastName, companyName,address,city,
          state,zip,email,phone,}),
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