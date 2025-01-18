interface Reservation {
    eventDetails: string;
    date: string;
    time: string;
}

async function fetchReservations() {
    try {
        const response = await fetch('http://localhost:3000/api/reservation', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch reservations');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching reservations:', error);
        return [];
    }
}

function createReservationCard(reservation: Reservation) {
    return `
        <div class="card mb-3">
            <div class="card-body">
                <img class="pin" src="./photos/pin.png"/>
                <p class="card-text">Event: ${reservation.eventDetails}</p>
                <p class="card-text">Date: ${reservation.date}</p>
                <p class="card-text">Time: ${reservation.time}</p>
            </div>
        </div>
    `;
}

async function displayReservations() {
    const reservations = await fetchReservations();
    const container = document.querySelector('.container-main');
    if (container) {
        container.innerHTML = reservations.map(createReservationCard).join('');
    }
}

document.getElementById('review')?.addEventListener('click', displayReservations);
