
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

let counter=0;
function addToCart(button) { 
    counter+=1;
    var itemCouner=document.getElementById('counter')
    itemCouner.textContent=counter;
    var item = button.closest('.cls1');
    var image = item.querySelector('.image').src; 
    var name = item.querySelector('.name').textContent;
    var price = item.querySelector('.total-price').textContent;
    var category = item.querySelector('.category').textContent; 
    var cartContainer = document.getElementById('cartContainer'); 
    var cartItem = document.createElement('div'); 
    // cartItem.classList.add('item');
    cartItem.innerHTML = ` 
    <div class="cart-item" style="display: flex; align-items: center;"> 
        <div class="image-div" style="margin-right:70px;"> 
            <img class="checkout-image" src="${image}" style="background-color: aliceblue; width:100px;"> 
        </div> 
        <div class="item-info" >
            <div class="name" >${name}</div> 
            <div class="total-price" >${price}</div> 
            <div class="category" >${category}</div>
        </div>
        <span class="remove">X</span>
         
    </div>`;

cartContainer.appendChild(cartItem); 

    cartItem.querySelector('.remove').addEventListener('click', function() {
        cartItem.remove();
        counter-=1;
        itemCouner.textContent=counter;
    });
}

