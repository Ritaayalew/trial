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
var _a;
function fetchReservations() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:3000/api/reservation', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch reservations');
            }
            return yield response.json();
        }
        catch (error) {
            console.error('Error fetching reservations:', error);
            return [];
        }
    });
}
function createReservationCard(reservation) {
    return `
        <div class="card mb-3">
            <div class="card-body">
                <img class="pin" src="./photos/pin.png"/>
                <p class="card-text"><b>Event:</b> ${reservation.eventDetails}</p>
                <p class="card-text"><b>Date:</b> ${reservation.date}</p>
                <p class="card-text"><b>Time: </b>${reservation.time}</p>
            </div>
        </div>
    `;
}
function displayReservations() {
    return __awaiter(this, void 0, void 0, function* () {
        const reservations = yield fetchReservations();
        const container = document.querySelector('.container-main');
        if (container) {
            container.innerHTML = reservations.map(createReservationCard).join('');
            container.style.display = "flex";

        }
    });
}
(_a = document.getElementById('review')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', displayReservations);
