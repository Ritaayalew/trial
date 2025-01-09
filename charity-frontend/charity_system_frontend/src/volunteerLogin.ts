document.addEventListener('DOMContentLoaded', function () {
    const loginButton=document.getElementById('loginButton') as HTMLElement;
    loginButton.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent form submission

        const email = (document.getElementById('loginEmail') as HTMLInputElement).value;
        const password = (document.getElementById('password2') as HTMLInputElement).value;

        try {
            const response = await fetch('api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data = await response.json();
            localStorage.setItem('authToken', data.token); // Store the token in localStorage
            window.location.pathname = '/volunteer-dashboard'; // Redirect to the specified path
        } catch (error) {
            console.error('Error during login:', error);
        }
    });
});


