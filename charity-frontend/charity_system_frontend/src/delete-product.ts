document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('removeProductForm') as HTMLFormElement;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get the product ID from the form
        const productId = (document.getElementById('productId') as HTMLInputElement).value;

        try {
            const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Error message from server:', errorMessage);
                throw new Error('Failed to delete product');
            }

            console.log('Product deleted successfully');
            alert('Product deleted successfully!');

            // Optionally, you can reset the form or provide feedback to the user
            form.reset();
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting product. Please try again.');
        }
    });
});
