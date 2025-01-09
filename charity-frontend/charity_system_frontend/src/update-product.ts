document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('updateProductForm') as HTMLFormElement;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();


        const availability = (document.getElementById('update-product') as HTMLSelectElement).value;
        const name = (document.getElementById('new-name') as HTMLInputElement).value;
        const price = (document.getElementById('new-price') as HTMLInputElement).value;
        const category = (document.getElementById('new-category') as HTMLInputElement).value;
        const quantity = (document.getElementById('new-quantity') as HTMLInputElement).value;
        const imageUrl = (document.getElementById('new-imageUrl') as HTMLInputElement).value;
        const productId = (document.getElementById('productIdUpdate') as HTMLInputElement).value;

        const updateItemDto: { [key: string]: any } = {};
        if (availability) updateItemDto.availability = availability;
        if (name) updateItemDto.name = name;
        if (price) updateItemDto.price = parseFloat(price);
        if (category) updateItemDto.category = category;
        if (quantity) updateItemDto.quantity = parseInt(quantity);
        if (imageUrl) updateItemDto.imageUrl = imageUrl;

        try {
            const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateItemDto),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Error message from server:', errorMessage);
                throw new Error('Failed to update product');
            }

            const result = await response.json();
            console.log('Product updated successfully:', result);
            alert('Product updated successfully!');

            // Optionally, you can reset the form or provide feedback to the user
            form.reset();
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product. Please try again.');
        }
    });
});
