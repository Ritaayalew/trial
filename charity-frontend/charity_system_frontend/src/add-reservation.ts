document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservationForm') as HTMLFormElement;

    if (reservationForm) {
        reservationForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const fullName = document.getElementById('fullname') as HTMLInputElement;
            const email = document.getElementById('signupemail') as HTMLInputElement;
            const phone = document.getElementById('phone') as HTMLInputElement;
            const date = document.getElementById('date') as HTMLInputElement;
            const time = document.getElementById('time') as HTMLInputElement;
            const eventDetails = document.getElementById('services') as HTMLTextAreaElement;

            const reservationData = {
                reserverName: fullName.value,
                reserverPhone: phone.value,
                reserverEmail: email.value,
                eventDetails: eventDetails.value,
                date: date.value,
                time: time.value
            };

            try {
                const response = await fetch('http://localhost:3000/api/reservation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reservationData)
                });

                if (!response.ok) {
                    const errorMessage = await response.text();
                    console.error('Error message from server:', errorMessage);
                    throw new Error('Failed to submit reservation');
                } else {
                    const result = await response.json();
                    console.log('Reservation submitted successfully:', result);
                    alert('Reservation submitted successfully!');
                }
            } catch (error) {
                console.error('Error submitting reservation:', error);
                alert('Error submitting reservation. Please try again.');
            }
        });
    }
});
