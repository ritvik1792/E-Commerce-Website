export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let macthingItem=cart.find(item=> item.productId===productId);

    // search for product in cart
    // cart.forEach((item) => {
    //     if (productId == item.productId) {
    //         macthingItem = item;
    //     }
    // });

    if (macthingItem) {
        macthingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
    saveToStorage();
}
export function UpdateCart() {
    let cartQuanitty = 0;
    cart.forEach(item => {
        cartQuanitty += item.quantity;
    })
    saveToStorage();
}
