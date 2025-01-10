"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const saveChangesButton = document.getElementById('saveChangesButton');
    if (saveChangesButton) {
        saveChangesButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
            const fullName = document.getElementById('firstName');
            const email = document.getElementById('inputEmail4');
            const password = document.getElementById('inputPassword4');
            const phone = document.getElementById('inputAddress2');
            
            
            const updateProfileDTO = {};
            if (fullName.value)
                updateProfileDTO.fullName = fullName.value;
            if (email.value)
                updateProfileDTO.email = email.value;
            if (phone.value)
                updateProfileDTO.phone = phone.value;
            if (password.value)
                updateProfileDTO.password = password.value;
            try {
                const token = localStorage.getItem('authToken'); // Make sure the key matches what you used earlier
                console.log(token);
                if (!token) {
                    throw new Error('No token found');
                }
                const response = yield fetch('/api/volunteer/my-profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }
                const data = yield response.json();
                console.log(data[0].email);
                const requestBody = {
                    emailInput: data[0].email,
                    updateProfileDTO: updateProfileDTO
                };
                try {
                    const response = yield fetch('http://localhost:3000/api/volunteer/edit-profile', {
                        method: 'PATCH',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestBody),
                    });
                    if (!response.ok) {
                        const errorMessage = yield response.text();
                        console.error('Error message from server:', errorMessage);
                        throw new Error('Failed to update profile');
                    }
                    const result = yield response.json();
                    console.log('Profile updated successfully:', result);
                    alert('Profile updated successfully!');
                }
                catch (error) {
                    console.error('Error updating profile:', error);
                    alert('Error updating profile. Please try again.');
                }
            }
            catch (error) {
                console.error('Error fetching profile data:', error);
            }
        }));
    }
});

