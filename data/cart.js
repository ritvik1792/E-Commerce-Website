export const cart=[];

export function addToCart(productId) {
    let macthingItem;

    // search for product in cart
    cart.forEach((item) => {
        if (productId == item.productId) {
            macthingItem = item;
        }
    });

    if (macthingItem) {
        macthingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}
export function UpdateCart(){
    let cartQuanitty = 0;
    cart.forEach(item => {
        cartQuanitty += item.quantity;
    })
}