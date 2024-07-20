document.addEventListener('DOMContentLoaded', () => {
    // Example: User registration
    document.getElementById('registerForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            // Check if the response is ok and parse JSON
            if (response.ok) {
                const data = await response.json();
                console.log('Register response:', data);
                alert(data.message);
            } else {
                const errorData = await response.json();
                console.error('Registration error:', errorData);
                alert('Registration failed: ' + errorData.error);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Error during registration. Check the console for details.');
        }
    });

    // Example: User login
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            // Check if the response is ok and parse JSON
            if (response.ok) {
                const data = await response.json();
                console.log('Login response:', data);

                if (data.token) {
                    localStorage.setItem('token', data.token);
                    alert('Login successful!');
                } else {
                    alert('Login failed: ' + data.error);
                }
            } else {
                const errorData = await response.json();
                console.error('Login error:', errorData);
                alert('Login failed: ' + errorData.error);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Error during login. Check the console for details.');
        }
    });
});
