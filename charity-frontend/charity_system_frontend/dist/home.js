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
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        yield registerVolunteer();
    }));
});
function registerVolunteer() {
    return __awaiter(this, void 0, void 0, function* () {
        const fullnameInput = document.getElementById('fullname');
        const emailInput = document.getElementById('signupemail');
        const passwordInput = document.getElementById('passwordSignup');
        const servicesInput = document.querySelector('textarea');
        const volunteerData = {
            fullName: fullnameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            services: servicesInput.value,
            phone: 1234567890 // Add a placeholder phone number as it's required in the DTO
        };
        try {
            const response = yield fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(volunteerData)
            });
            if (response.ok) {
                const result = yield response.json();
                console.log('Volunteer registered:', result);
                // Handle successful registration (e.g., show a success message)
            }
            else {
                const error = yield response.json();
                console.error('Error registering volunteer:', error);
                // Handle error (e.g., show an error message)
            }
        }
        catch (error) {
            console.error('Error:', error);
            // Handle fetch error (e.g., show an error message)
        }
    });
}
