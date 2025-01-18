import { fetchProfile } from './volunteer-profile.ts';
document.addEventListener('DOMContentLoaded', () => {
    const saveChangesButton = document.getElementById('saveChangesButton');

    if (saveChangesButton) {
        saveChangesButton.addEventListener('click', async () => {
                const fullName = document.getElementById('firstName') as HTMLInputElement;
                const email = document.getElementById('inputEmail4') as HTMLInputElement;
                const password = document.getElementById('inputPassword4') as HTMLInputElement;
                const phone = document.getElementById('lastName') as HTMLInputElement;
                const services = document.getElementById('inputAddress2') as HTMLTextAreaElement;
    
                // Create the payload, including only defined values
                const updateProfileDTO: { [key: string]: any } = {};
                if (fullName.value) updateProfileDTO.fullName = fullName.value;
                if (email.value) updateProfileDTO.email = email.value;
                if (phone.value) updateProfileDTO.phone = Number(phone.value);
                if (password.value) updateProfileDTO.password = password.value;
                if (services.value) updateProfileDTO.services = services.value;

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
          
                const data= await response.json();

                const requestBody = {
                    emailInput: data[0].email,
                    updateProfileDTO: updateProfileDTO
                };
    
                try {
                    const updateResponse = await fetch('http://localhost:3000/api/volunteer/edit-profile', {
                        method: 'PATCH',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestBody),
                    });
    
                    if (!updateResponse.ok) {
                        const errorMessage = await response.text();
                        console.error('Error message from server:', errorMessage);
                        console.log(response);
                        throw new Error('Failed to update profile');
                        
                    }
                    else{
                        const result = await response.json();
                        console.log('Profile updated successfully:', result);
                        
                        if (result.token) { localStorage.setItem('authToken', result.token); }
                        
                        console.log(updateResponse);
                        console.log(requestBody);
                        alert('Profile updated successfully!');
                        fetchProfile();
                    }
    
                    
                    
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







          