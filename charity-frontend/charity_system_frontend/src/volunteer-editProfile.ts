document.addEventListener('DOMContentLoaded', () => {
    const saveChangesButton = document.getElementById('saveChangesButton');

    if (saveChangesButton) {
        saveChangesButton.addEventListener('click', async () => {
            const fullName = document.getElementById('firstName') as HTMLInputElement;
            const email = document.getElementById('inputEmail4') as HTMLInputElement;
            const password = document.getElementById('inputPassword4') as HTMLInputElement;
            const phone = document.getElementById('inputAddress2') as HTMLInputElement;
            // const gender = (document.getElementById('inputState') as HTMLSelectElement).value;

            const updateProfileDTO = {
                fullName: fullName.value,
                email: email.value,
                phone: phone.value,
                password: password.value,
            };

            // Send POST request to update the profile
            try {
                const token = localStorage.getItem('authToken'); // Make sure the key matches what you used earlier
                console.log(token);
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch('http://localhost:3000/api/volunteer/edit-profile', {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateProfileDTO),
                });

                if (!response.ok) {
                    throw new Error('Failed to update profile');
                }

                const result = await response.json();
                console.log('Profile updated successfully:', result);

                // Optionally, you can add code to update the profile view or show a success message.
            } catch (error) {
                console.error('Error updating profile:', error);
                // Optionally, you can add code to show an error message.
            }
        });
    }
});
