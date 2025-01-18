
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


function addToCart(button) { 
   
    var item = button.closest('.item');
    var image = item.querySelector('.image img').src; 
    var name = item.querySelector('.name').textContent;
    var price = item.querySelector('.total-price').textContent;
    var quantity = item.querySelector('.quantity').textContent; 
    var cartContainer = document.getElementById('cartContainer'); 
    var cartItem = document.createElement('div'); 
    cartItem.classList.add('item');
    cartItem.innerHTML = ` 
    <div class="cart-item d-flex" style="display: flex; align-items: center;"> 
        <div class="image" style="margin-right:70px;"> 
            <img src="${image}" style="background-color: aliceblue;"> 
        </div> 
        <div class="name" style="margin-right: 70px;">${name}</div> 
        <div class="total-price" style="margin-right: 70px;">${price}</div> 
        <div class="quantity" style="margin-right: 70px;">${quantity}</div>
        <div>
            <span class="remove" style="cursor: pointer; background-color: red; ">X</span>
        </div> 
    </div>
`; 

cartContainer.appendChild(cartItem); 

    cartItem.querySelector('.remove').addEventListener('click', function() {
        cartItem.remove();
    });
}

