import { cart, addToCart, UpdateCart } from '../data/cart.js';
import { products } from '../data/products.js';

document.addEventListener("DOMContentLoaded", () => {

    let productDetail = document.querySelectorAll(".product-detail-1");
    productDetail.forEach(node => {
        node.addEventListener("mouseover", function (event) {
            this.classList.add("product-detail-2");
        })
        node.addEventListener("mouseout", function (event) {
            this.classList.remove("product-detail-2");
        })
    })

    let producteHTML = '';
    products.forEach((product) => {
        producteHTML += `
        <div class="product ${product.name}">
            <a href="${product.image}">
                <img src="${product.image}" alt="${product.name}">
            </a>
            <p>
                ${product.name}
            </p>
            <div class="product-line">
                <div class="addcart" data-product-id="${product.id}">Add to Cart</div>
                <div class="buynowp">Buy Now</div>
            </div>
        </div>`;
    })


    document.querySelector(".container-body").innerHTML = producteHTML;
    document.querySelectorAll('.addcart')
        .forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;

                addToCart(productId);
                UpdateCart();
                console.log(cart);
            });
        });
})


