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
                const response = yield fetch('http://localhost:3000/api/volunteer/edit-profile', {
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
                const result = yield response.json();
                console.log('Profile updated successfully:', result);
                // Optionally, you can add code to update the profile view or show a success message.
            }
            catch (error) {
                console.error('Error updating profile:', error);
                // Optionally, you can add code to show an error message.
            }
        }));
    }
});
