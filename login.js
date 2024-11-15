// Valid user accounts with pre-hashed passwords
const validUsers = [
    { 
        email: 'user1@example.com', 
        password: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f' 
    },
    { 
        email: 'user2@example.com', 
        password: '8c0e81d5d1d7ad06bd73902a2f04c7ab7f35a5dbdb96bd88199e5a339a4fd6b5'
    }
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
            // Hash the input password before comparing
            const hashedPassword = CryptoJS.SHA256(password).toString();
            
            const user = validUsers.find(u => 
                u.email === email && u.password === hashedPassword
            );

            resolve({
                status: 200,
                success: !!user,
                message: user ? 'Login successful' : 'Invalid credentials'
            });
        }, 500);
    });
} 