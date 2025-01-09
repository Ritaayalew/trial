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
    const form = document.getElementById('removeProductForm');
    form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        // Get the product ID from the form
        const productId = document.getElementById('productId').value;
        try {
            const response = yield fetch(`http://localhost:3000/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                const errorMessage = yield response.text();
                console.error('Error message from server:', errorMessage);
                throw new Error('Failed to delete product');
            }
            console.log('Product deleted successfully');
            alert('Product deleted successfully!');
            // Optionally, you can reset the form or provide feedback to the user
            form.reset();
        }
        catch (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting product. Please try again.');
        }
    }));
});
