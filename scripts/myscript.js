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
    function addProduct(product){
       return `
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
    }
    products.forEach((product) => {
        producteHTML += addProduct(product);
    })


    let productBody=document.querySelector(".container-body");
    productBody.innerHTML=producteHTML;
    document.querySelectorAll('.addcart')
        .forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;

                addToCart(productId);
                UpdateCart();
                console.log(cart);
            });
        });
    
    
    const sign_up_btn=document.querySelector('.Signup');
    const sign_in_btn=document.querySelector('.Signin');

    sign_up_btn.addEventListener('click',()=>{
        window.location.href='account.html?mode=signup';
    });
    sign_in_btn.addEventListener('click',()=>{
        window.location.href='account.html?mode=signin';
    });

    // product-nav-bar search
    const input=document.querySelector('#search');
    let found=false;
    input.addEventListener('keypress',function(event){
        if(event.key=='Enter'){
            event.preventDefault();
            found=false;
            products.forEach((product)=>{
                if(product.name==event.target.value){
                    productBody.innerHTML=addProduct(product);
                    found=true;
                }
            })
            if(!found){
                productBody.innerHTML = producteHTML;
            }
        }else{
            productBody.innerHTML = producteHTML;
        }
    })

    // product-nav-bar buttons 
    const productsCat=document.querySelectorAll('.main-container .left-bar span');
    let catProductHTML='';
    productsCat.forEach((cat)=>{
        cat.addEventListener('click',()=>{
            const catSelected=cat.dataset.id;
            if(catSelected=='all'){
                productBody.innerHTML=producteHTML;
            }else{
                catProductHTML=''
                products.forEach((product)=>{
                    if(product.cat==catSelected){
                        catProductHTML+=addProduct(product);
                    }
                })
                productBody.innerHTML=catProductHTML;
            }
        })
    })

    
})

let cartNumber=document.getElementById('cart-number');

if(cartNumber.innerText==='0'){
    cartNumber.style.opacity=1;
}
cartNumber.innerText=UpdateCart();

