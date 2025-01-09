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
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault(); // Prevent form submission
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('password2').value;
            try {
                const response = yield fetch('api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                if (!response.ok) {
                    throw new Error('Failed to login');
                }
                const data = yield response.json();
                localStorage.setItem('authToken', data.token); // Store the token in localStorage
                window.location.pathname = '/volunteer-dashboard'; // Redirect to the specified path
            }
            catch (error) {
                console.error('Error during login:', error);
            }
        });
    });
});
