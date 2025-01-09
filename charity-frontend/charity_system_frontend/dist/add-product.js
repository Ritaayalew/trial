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
    const form = document.getElementById('addProductForm');
    form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        // Get form values
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const category = document.getElementById('category').value;
        const quantity = document.getElementById('quantity').value;
        // Create the payload
        const addItemDTO = {
            name,
            price,
            quantity,
            category,
            imageUrl,
        };
        try {
            const response = yield fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addItemDTO),
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            const result = yield response.json();
            console.log('Product added successfully:', result);
            // Optionally, you can reset the form or provide feedback to the user
            form.reset();
            alert('Product added successfully!');
        }
        catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
        }
    }));
});
