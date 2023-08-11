import { cart, UpdateCart } from '../data/cart.js';
import { products } from '../data/products.js';

console.log(cart);
let cartBody = document.querySelector('.left-panel');
let cartHTML = '';

function addProduct(product,cart) {
    let html=`
    <div class="product">
        <div class="product-image">
            <img src="/images/${product.id}.jpg" alt="Product1">
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
                        <input type="radio" id="same-day" name="delivery-type" value="1">
                        <label for="same-day">Same Day Delivery</label>
                    </div>
                    <div class="fast-option options">
                        <input type="radio" id="fast" name="delivery-type" value="2">
                        <label for="fast">Fast Delivery</label>
                    </div>
                    <div class="regular-option options">
                        <input type="radio" id="regular" name="delivery-type" value="3">
                        <label for="regular">Next Day Delivery</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-desc">
            <div class="desc-heading">Features</div>
            <ul class="desc-list">
                <li>
                    Elegant and Slim
                </li>
                <li>
                    Durable
                </li>
                <li>
                    Foldable
                </li>
                <li>
                    4 Height Adjustable Options
                </li>
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
                        <td class="second">DXR-29</td>
                    </tr>
                    <tr>
                        <td class="first">Color</td>
                        <td class="second">Raven Black</td>
                    </tr>
                    <tr>
                        <td class="first">Dimensions</td>
                        <td class="second">14 X 12 x 2 inch</td>
                    </tr>
                    <tr>
                        <td class="first">Material</td>
                        <td class="second">Wooden</td>
                    </tr>
                    <tr>
                        <td class="first">Height Ajustable</td>
                        <td class="second">Yes</td>
                    </tr>
                    <tr>
                        <td class="first">Adjustable Range</td>
                        <td class="second">1-4</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>`;

    return `
            <div class="product">
                <div class="product-image">
                    <img src="/images/${product.id}.jpg" alt="Product1">
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
                                <input type="radio" id="same-day" name="delivery-type" value="1">
                                <label for="same-day">Same Day Delivery</label>
                            </div>
                            <div class="fast-option options">
                                <input type="radio" id="fast" name="delivery-type" value="2">
                                <label for="fast">Fast Delivery</label>
                            </div>
                            <div class="regular-option options">
                                <input type="radio" id="regular" name="delivery-type" value="3">
                                <label for="regular">Next Day Delivery</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-desc">
                    <div class="desc-heading">Features</div>
                    <ul class="desc-list">
                        <li>
                            Elegant and Slim
                        </li>
                        <li>
                            Durable
                        </li>
                        <li>
                            Foldable
                        </li>
                        <li>
                            4 Height Adjustable Options
                        </li>
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
                                <td class="second">DXR-29</td>
                            </tr>
                            <tr>
                                <td class="first">Color</td>
                                <td class="second">Raven Black</td>
                            </tr>
                            <tr>
                                <td class="first">Dimensions</td>
                                <td class="second">14 X 12 x 2 inch</td>
                            </tr>
                            <tr>
                                <td class="first">Material</td>
                                <td class="second">Wooden</td>
                            </tr>
                            <tr>
                                <td class="first">Height Ajustable</td>
                                <td class="second">Yes</td>
                            </tr>
                            <tr>
                                <td class="first">Adjustable Range</td>
                                <td class="second">1-4</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>`
}


cart.forEach((product) => {
    products.forEach((databse) => {
        if (databse.id == product.productId) {
            cartHTML +=addProduct(databse,product);
            console.log(product.quantity);
        }
    })
})
cartBody.innerHTML=cartHTML;
