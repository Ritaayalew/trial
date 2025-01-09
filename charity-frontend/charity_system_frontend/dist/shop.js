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
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:3000/api/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return yield response.json();
        }
        catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    });
}
function createProductCard(product) {
    console.log(product.imageUrl);
    return `
        <article class="cls1">
            <img src="${product.imageUrl}" alt="Product Image">
            <ul>
                <li>Price: ${product.price} birr</li>
                <li>Category: ${product.category}</li>
                <li>Quantity: ${product.quantity}</li>
            </ul>
        </article>
    `;
}
function displayProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield fetchProducts();
        console.log(products);
        const productContainer = document.getElementById('productContainer');
        if (productContainer) {
            productContainer.innerHTML = products.map(createProductCard).join('');
        }
    });
}
document.addEventListener('DOMContentLoaded', displayProducts);
