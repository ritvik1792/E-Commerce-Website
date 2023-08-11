import { cart, UpdateCart } from '../data/cart.js';
import { products } from '../data/products.js';

let cartBody = document.querySelector('.left-panel');
let cartHTML = '';

function addProduct(product,cart) {
    let html=`
    <div class="product">
        <div class="product-image">
            <img src="/images/${product.id}.jpg" alt="${product.id}">
        </div>
        <div class="product-det">
            <div class="product-name">${product.name}</div>
            <div class="price">
                <span style="font-weight: 600;">Price: </span>
                <span>$${product.price}</span>
            </div>
            <div class="quantity-container">
                <label for="quantity">Quantity: </label>
                <div class="q-field">
                    <button class="decrease-val q-btn" value="-">-</button>
                    <input type="text" class="quantity" id="quantity" value="${cart.quantity}">
                    <button class="increse-val q-btn" value="+">+</button>
                </div>
            </div>
            <div class="delivery">
                <p>Choose delivery option:</p>
                <div class="delivery-options">
                    <div class="same-day-option options">
                        <input type="radio" id="same-day" name="delivery-type-${product.id}" value="1">
                        <label for="same-day">Same Day Delivery</label>
                    </div>
                    <div class="fast-option options">
                        <input type="radio" id="fast" name="delivery-type-${product.id}" value="2">
                        <label for="fast">Fast Delivery</label>
                    </div>
                    <div class="regular-option options">
                        <input type="radio" id="regular" name="delivery-type-${product.id}" value="3">
                        <label for="regular">Next Day Delivery</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-desc">
            <div class="desc-heading">Features</div>
            <ul class="desc-list">${product.desc.features.map(feature=>{
                return `<li>${feature}</li>`;
            }).join("")}
            </ul>
        </div>
        <div class="product-specs">
            <div class="specs-heading">
                Specification
            </div>
            <div class="specs-table">
                <table>
                    <tr>
                        <td class="first">Model Name</td>
                        <td class="second">${product.desc.specs.modelName}</td>
                    </tr>
                    <tr>
                        <td class="first">Color</td>
                        <td class="second">${product.desc.specs.color}</td>
                    </tr>
                    <tr>
                        <td class="first">Dimensions</td>
                        <td class="second">${product.desc.specs.dimensions}</td>
                    </tr>
                    <tr>
                        <td class="first">Material</td>
                        <td class="second">${product.desc.specs.material}</td>
                    </tr>
                    <tr>
                        <td class="first">Height Ajustable</td>
                        <td class="second">${product.desc.specs.adjustable[0]}</td>
                    </tr>
                    ${
                        (()=>{
                            if(product.desc.specs.adjustable[0]==="yes"){
                                return `
                                <tr>
                                    <td class="first">Adjustable Range</td>
                                    <td class="second">${product.desc.specs.adjustable[1]}</td>
                                </tr>
                                `
                            }
                            return '';
                        })()
                    }
                </table>
            </div>
        </div>
    </div>`;

    return html;
}


cart.forEach((product) => {
    products.forEach((database) => {
        if (database.id == product.productId) {
            cartHTML +=addProduct(database,product);
        }
    })
})
cartBody.innerHTML=cartHTML;


let cartNumber=document.getElementById('cart-number');

if(cartNumber.innerText==='0'){
    cartNumber.style.opacity=1;
}
cartNumber.innerText=UpdateCart();


document.addEventListener('DOMContentLoaded', function (){
    let incBtns=document.querySelectorAll('.increase-val');
    let decBtn=document.querySelector('.decrease-val');
    console.log(incBtns);
    incBtns.forEach(function(incBtn){
        console.log("inc-btn");
        incBtn.addEventListener('mouseover',function(event){
            console.log(this);
        })
    })
    
})

