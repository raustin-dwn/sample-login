// Valid user accounts
const validUsers = [
    { email: 'user1@example.com', password: 'password123' },
    { email: 'user2@example.com', password: 'password456' }
];

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate API call
    try {
        const response = await simulateLoginRequest(email, password);
        console.log('Login response:', response);
        
        if (response.status === 200) {
            if (response.success) {
                window.location.href = 'profile_creation.html';
            } else {
                alert('Invalid credentials');
            }
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login');
    }
});

function simulateLoginRequest(email, password) {
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            const user = validUsers.find(u => 
                u.email === email && u.password === password
            );

            resolve({
                status: 200,
                success: !!user,
                message: user ? 'Login successful' : 'Invalid credentials'
            });
        }, 500);
    });
} 