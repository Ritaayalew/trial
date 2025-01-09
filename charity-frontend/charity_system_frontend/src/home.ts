document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm') as HTMLFormElement;

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        await registerVolunteer();
    });
});

async function registerVolunteer() {
    const fullnameInput = document.getElementById('fullname') as HTMLInputElement;
    const emailInput = document.getElementById('signupemail') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const passwordInput = document.getElementById('passwordSignup') as HTMLInputElement;
    const servicesInput = document.querySelector('textarea') as HTMLTextAreaElement;

    const volunteerData = {
        fullName: fullnameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        password: passwordInput.value,
        services: servicesInput.value
    };

    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerData)
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('authToken', data.token);
            console.log('Volunteer registered:', data);
            window.location.pathname = '/volunteer-dashboard';
            // Handle successful registration (e.g., show a success message)
        } else {
            const error = await response.json();
            console.error('Error registering volunteer:', error);
            // Handle error (e.g., show an error message)
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle fetch error (e.g., show an error message)
    }
}
