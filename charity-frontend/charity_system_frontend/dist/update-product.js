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
    const form = document.getElementById('updateProductForm');
    form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const availability = document.getElementById('update-product').value;
        const name = document.getElementById('new-name').value;
        const price = document.getElementById('new-price').value;
        const category = document.getElementById('new-category').value;
        const quantity = document.getElementById('new-quantity').value;
        const imageUrl = document.getElementById('new-imageUrl').value;
        const productId = document.getElementById('productIdUpdate').value;
        const updateItemDto = {};
        if (availability)
            updateItemDto.availability = availability;
        if (name)
            updateItemDto.name = name;
        if (price)
            updateItemDto.price = parseFloat(price);
        if (category)
            updateItemDto.category = category;
        if (quantity)
            updateItemDto.quantity = parseInt(quantity);
        if (imageUrl)
            updateItemDto.imageUrl = imageUrl;
        try {
            const response = yield fetch(`http://localhost:3000/api/products/${productId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateItemDto),
            });
            if (!response.ok) {
                const errorMessage = yield response.text();
                console.error('Error message from server:', errorMessage);
                throw new Error('Failed to update product');
            }
            const result = yield response.json();
            console.log('Product updated successfully:', result);
            alert('Product updated successfully!');
            // Optionally, you can reset the form or provide feedback to the user
            form.reset();
        }
        catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product. Please try again.');
        }
    }));
});
