
function cartIcon() {   
    const form = document.getElementById('cart-tab');
    const mainContent = document.querySelector('.main');
    form.style.display = "block";
    mainContent.classList.add('blur-background'); 
}
function shopClose(){
    const carts = document.getElementById('cart-tab');
    const mainContet = document.querySelector('main');
    carts.style.display = "none"; 
    mainContet.classList.remove('blur-background'); 

}
function deliveryClose(){
    const fform = document.getElementById('orderForm');
    const mainContet = document.querySelector('main');
    fform.style.display = "none"; 
    mainContet.classList.remove('blur-background'); 
}

function confirmOrder() {   
    const form = document.getElementById('orderForm');
    const mainContent = document.querySelector('main');
    const shopOrder = document.getElementById('cart-tab');
    shopOrder.style.display = "none"; 
    form.style.display = "block";
    mainContent.classList.add('blur-background'); 
}


let items = [];
let counter = 0;
let totalPrice = 0;

function addToCart(button) { 
    counter += 1;
    var itemCounter = document.getElementById('counter');
    itemCounter.textContent = counter;

    var item = button.closest('.cls1');
    var image = item.querySelector('.image').src; 
    var name = item.querySelector('.name').textContent;
    var price = item.querySelector('.total-price').textContent;
    var total = document.querySelector('.total');

    var newPrice = parseFloat(price.replace(/[^0-9.]/g, '')); // Remove all non-numeric characters except the decimal point
    console.log(typeof newPrice);

    totalPrice += newPrice;
    console.log(totalPrice);
    total.textContent = `Total price: ${totalPrice} birr`;

    var category = item.querySelector('.category').textContent; 
    var cartContainer = document.getElementById('cartContainer'); 
    var cartItem = document.createElement('div');
    cartItem.innerHTML = `
    <div class="cart-item" style="display: flex; align-items: center;">
        <div class="image-div" style="margin-right:70px;">
            <img class="checkout-image" src="${image}" style="background-color: aliceblue; width:100px;">
        </div>
        <div class="item-info">
            <div class="name">${name}</div>
            <div class="total-price">${price}</div>
            <div class="category">${category}</div>
        </div>
        <span class="remove">X</span>
    </div>`;

    cartContainer.appendChild(cartItem);
    items.push(name.slice(6)); // Assuming 'Name: ' prefix is removed
    console.log(items);

    // Save the updated order information to localStorage
    updateOrderDTO();

    cartItem.querySelector('.remove').addEventListener('click', function() {
        cartItem.remove();
        counter -= 1;
        totalPrice -= newPrice;
        console.log(totalPrice);
        total.textContent = `Total price: ${totalPrice} birr`;
        itemCounter.textContent = counter;

        const itemIndex = items.indexOf(name.slice(6)); 
        if (itemIndex > -1) {
            items.splice(itemIndex, 1);
        } 
        console.log('Items:', items);

        // Save the updated order information to localStorage
        updateOrderDTO();
    });
}

function updateOrderDTO() {
    const addOrderDTO = { 
        items: items.join(', '),  
        totalPrice: totalPrice,
        name: null,
        address: null,
        phone: null
    };

    localStorage.setItem('addOrderDTO', JSON.stringify(addOrderDTO));
}
