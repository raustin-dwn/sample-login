function loginSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const xhr = new XMLHttpRequest();
    const url = `https://api.project-foolio.com/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    
    xhr.open('POST', url, true);
    
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            try {
                const data = JSON.parse(xhr.responseText);
                if (xhr.status === 200) {
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
        }
    };
    
    const data = JSON.stringify({
        email: email,
        password: password
    });
    xhr.send(data);
}