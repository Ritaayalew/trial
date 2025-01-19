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
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault();
            const name = document.getElementById('delivery-name').value;
            const phone = document.getElementById('delivery-phone').value;
            const address = document.getElementById('delivery-address').value;
            const storedAddOrderDTO = localStorage.getItem('addOrderDTO');

            if (storedAddOrderDTO) {
                const addOrderDTO = JSON.parse(storedAddOrderDTO);
                console.log('Retrieved addOrderDTO:', addOrderDTO);
                addOrderDTO.name = name;
                addOrderDTO.phone = phone;
                addOrderDTO.address = address;

                try {
                    const response = yield fetch('http://localhost:3000/api/order', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(addOrderDTO)
                    });
                    if (!response.ok) {
                        const errorMessage = yield response.text();
                        console.error('Error message from server:', errorMessage);
                        throw new Error('Failed to submit order');
                    }
                    else {
                        const result = yield response.json();
                        console.log('order submitted successfully:', result);
                        alert('order submitted successfully!');
                    }
                }
                catch (error) {
                    console.error('Error submitting order:', error);
                    alert('Error submitting order. Please try again.');
                }
            }
        }));
    }
});


