document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm') as HTMLFormElement;

    if (orderForm) {
        orderForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = document.getElementById('delivery-name') as HTMLInputElement;
            const phone = document.getElementById('delivery-phone') as HTMLInputElement;
            const address = document.getElementById('delivery-address') as HTMLTextAreaElement;


            const storedAddOrderDTO = localStorage.getItem('addOrderDTO'); 
            if (storedAddOrderDTO) { 
                const addOrderDTO = JSON.parse(storedAddOrderDTO); 
                console.log('Retrieved addOrderDTO:', addOrderDTO);
                addOrderDTO.name=name.value;
                addOrderDTO.phone=phone.value;
                addOrderDTO.address=address.value;

                
            
                try {
                    const response = await fetch('http://localhost:3000/api/order', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(addOrderDTO)
                    });

                    if (!response.ok) {
                        const errorMessage = await response.text();
                        console.error('Error message from server:', errorMessage);
                        throw new Error('Failed to submit order');
                        
                    } else {
                        const result = await response.json();
                        console.log('order submitted successfully:', result);
                        alert('order submitted successfully!');
                    }
                } catch (error) {
                    console.error('Error submitting order:', error);
                    console.log(addOrderDTO);
                    alert('Error submitting order. Please try again.');
                }
            }

        });
    }
});


