document.addEventListener('DOMContentLoaded', () => {
    const saveChangesButton = document.getElementById('saveChangesButton');

    interface ProfileData {
        fullName: string;
        email: string;
        phone: string;
        services: string; 
      }

    if (saveChangesButton) {
        saveChangesButton.addEventListener('click', async () => {
            const fullName = document.getElementById('firstName') as HTMLInputElement;
                const email = document.getElementById('inputEmail4') as HTMLInputElement;
                const password = document.getElementById('inputPassword4') as HTMLInputElement;
                const phone = document.getElementById('inputAddress2') as HTMLInputElement;
    
                // Create the payload, including only defined values
                const updateProfileDTO: { [key: string]: any } = {};
                if (fullName.value) updateProfileDTO.fullName = fullName.value;
                if (email.value) updateProfileDTO.email = email.value;
                if (phone.value) updateProfileDTO.phone = phone.value;
                if (password.value) updateProfileDTO.password = password.value;

            try {
                const token = localStorage.getItem('authToken'); // Make sure the key matches what you used earlier
                console.log(token);
                if (!token) {
                    throw new Error('No token found');
                }
          
                const response = await fetch('/api/volunteer/my-profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
          
                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }
          
                const data: ProfileData = await response.json();

                const requestBody = {
                    emailInput: data[0].email,
                    updateProfileDTO: updateProfileDTO
                };
    
                try {
                    const response = await fetch('http://localhost:3000/api/volunteer/edit-profile', {
                        method: 'PATCH',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestBody),
                    });
    
                    if (!response.ok) {
                        const errorMessage = await response.text();
                        console.error('Error message from server:', errorMessage);
                        throw new Error('Failed to update profile');
                    }
    
                    const result = await response.json();
                    console.log('Profile updated successfully:', result);
                    console.log(response);
                    alert('Profile updated successfully!');
                    
                } catch (error) {
                    console.error('Error updating profile:', error);
                    alert('Error updating profile. Please try again.');
                }
        
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }  
            
        });
    }
});







          