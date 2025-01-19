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
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault();

            const fullName = document.getElementById('reservationfullname');
            const email = document.getElementById('reservationemail');
            const phone = document.getElementById('reservationphone');
            const date = document.getElementById('date');
            const time = document.getElementById('time');
            const eventDetails = document.getElementById('eventdetail');

            const reservationData = {
                reserverName: fullName.value,
                reserverPhone: phone.value,
                reserverEmail: email.value,
                eventDetails: eventDetails.value,
                date: date.value,
                time: time.value
            };
            try {
                const response = yield fetch('http://localhost:3000/api/reservation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reservationData)
                });
                if (!response.ok) {
                    const errorMessage = yield response.text();
                    console.error('Error message from server:', errorMessage);
                    throw new Error('Failed to submit reservation');
                }
                else {
                    const result = yield response.json();
                    console.log('Reservation submitted successfully:', result);
                    alert('Reservation submitted successfully!');
                }
            }
            catch (error) {
                console.error('Error submitting reservation:', error);
                alert('Error submitting reservation. Please try again.');
            }
        }));
    }
});
