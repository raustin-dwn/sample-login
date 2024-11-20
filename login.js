function loginSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const xhr = new XMLHttpRequest();
    const url = 'https://api.project-foolio.com/login';
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            try {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    console.log('Login successful:', response);
                    window.location.href = 'profile_creation.html';
                } else {
                    alert(response.message || 'Login failed');
                }
            } catch (error) {
                console.error('Response parsing error:', error);
                alert('An unexpected error occurred. Please try again.');
            }
        }
    };
    
    xhr.onerror = function() {
        console.error('Network error occurred');
        alert('A network error occurred. Please check your connection and try again.');
    };
    
    const requestBody = JSON.stringify({
        "email": email,
        "password": password
    });
    
    xhr.send(requestBody);
}