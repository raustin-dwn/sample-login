// Add an event listener to the form
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Create a JSON object from the form data
  const formData = {
    fullName: this.fullName.value,
    username: this.username.value,
    email: this.email.value,
    phone: this.phone.value,
    password: this.password.value,
    confirmPassword: this.confirmPassword.value
  };

  // Log the form data for debugging
  console.log('Form Data:', formData);

  // Send the data to the server
  fetch('https://api.project-foolio.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    console.log('Response status:', response.status); // Log the response status
    if (response.ok) {
      alert('Registration Complete'); // Show the alert message
      console.log('Registration successful');
    } else {
      alert('Registration failed. Please try again.'); // Show an error message
      console.error('Registration failed:', response.statusText);
    }
  })
  .catch(error => {
    alert('An error occurred. Please try again.'); // Show an error message
    console.error('Error:', error);
  });
});
