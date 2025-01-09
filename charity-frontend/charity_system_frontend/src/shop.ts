interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
    availability: string;
    imageUrl: string;
}

async function fetchProducts(){
    try {
        const response = await fetch('http://localhost:3000/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

function createProductCard(product: Product) {
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

async function displayProducts() {
    const products = await fetchProducts();
    console.log(products);
    const productContainer = document.getElementById('productContainer');
    if (productContainer) {
        productContainer.innerHTML = products.map(createProductCard).join('');
    }
}

document.addEventListener('DOMContentLoaded', displayProducts);
