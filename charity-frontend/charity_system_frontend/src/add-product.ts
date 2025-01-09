document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addProductForm') as HTMLFormElement;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const price = (document.getElementById('price') as HTMLInputElement).value;
        const imageUrl = (document.getElementById('imageUrl') as HTMLInputElement).value;
        const category = (document.getElementById('category') as HTMLTextAreaElement).value;
        const quantity = (document.getElementById('quantity') as HTMLTextAreaElement).value;

        // Create the payload
        const addItemDTO = {
            name,
            price,
            quantity, 
            category, 
            imageUrl, 
           
        };

        try {
            const response = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addItemDTO),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const result = await response.json();
            console.log('Product added successfully:', result);

            // Optionally, you can reset the form or provide feedback to the user
            form.reset();
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
        }
    });
});
