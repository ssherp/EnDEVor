// Update profile form handler
const updateProfileFormHandler = async function (event) {
    event.preventDefault();
  
    const firstName = document.querySelector('#inputFirstName').value.trim();
    const lastName = document.querySelector('#inputLastName').value.trim();
    const companyName = document.querySelector('#inputCompanyName').value.trim();
    const address = document.querySelector('#inputAddress').value.trim();
    const city = document.querySelector('#inputCity').value.trim();
    const state = document.querySelector('#inputState').value.trim();
    const zip = document.querySelector('#inputZip').value.trim();
    const phone = document.querySelector('#inputPhone').value.trim();
  
    if (firstName && lastName && companyName) {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        body: JSON.stringify({ firstName, lastName, companyName,address,city,
          state,zip,phone,}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log(response)
        // Reload the page to see updated information
        alert('Profile information has been updated.')
        location.reload();
        
      } else {
        alert('Failed to update profile.');
      }
    }
  };
  
  // Attach the update profile form handler
  document.querySelector('#update-profile-form').addEventListener('submit', updateProfileFormHandler);