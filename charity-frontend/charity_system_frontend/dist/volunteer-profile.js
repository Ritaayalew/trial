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
function fetchProfile() {
    return __awaiter(this, void 0, void 0, function* () {
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
            console.log(data);
            console.log("bla");
            updateProfile(data);
        }
        catch (error) {
            console.error('Error fetching profile data:', error);
        }
    });
}
function updateProfile(data) {
    const nameElement = document.querySelectorAll('.custom-name');
    const emailElements = document.querySelectorAll('.email');
    const phoneElement = document.querySelector('.samp-phone');
    const servicesElement = document.querySelector('.samp-services');
    if (nameElement.length) {
        nameElement.forEach(element => { element.textContent = data[0].fullName; });
    }
    if (emailElements.length) {
        emailElements.forEach(e => e.textContent = data[0].email);
    }
    if (phoneElement)
        phoneElement.textContent = data[0].phone;
    if (servicesElement)
        servicesElement.textContent = data[0].services;
}
document.addEventListener('DOMContentLoaded', fetchProfile);
