document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      console.log('Sending POST request to /login...');
      const response = await fetch('https://api.project-foolio.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        if (data.success) {
          console.log('Login successful:', data);
          window.location.href = 'profile_creation.html';
        } else {
          alert(data.message || 'Invalid credentials');
        }
      } else {
        alert(`Error: ${data.message || 'Login failed'}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  });