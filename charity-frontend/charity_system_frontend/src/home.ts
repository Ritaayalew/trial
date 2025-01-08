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
    const passwordInput = document.getElementById('passwordSignup') as HTMLInputElement;
    const servicesInput = document.querySelector('textarea') as HTMLTextAreaElement;

    const volunteerData = {
        fullName: fullnameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        services: servicesInput.value,
        phone: 1234567890 // Add a placeholder phone number as it's required in the DTO
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
            const result = await response.json();
            console.log('Volunteer registered:', result);
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
