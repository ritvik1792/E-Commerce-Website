// document.addEventListener("DOMContentLoaded", () => {
//     var addtocart = document.querySelectorAll(".addcart");
//     var buynowp = document.querySelectorAll(".buynowp")


//     addtocart.forEach(function(element,index) {
//         element.addEventListener("mouseover", function (event) {
//             buynowp[index].style.display = "none";
//         });
//         element.addEventListener("mouseout", function (event) {
//             buynowp[index].style.display = "flex";
//         });
//     });
//     buynowp.forEach(function(element,index) {
//         element.addEventListener("mouseover", function (event) {
//             addtocart[index].style.display = "none";
//         });
//         element.addEventListener("mouseout", function (event) {
//             addtocart[index].style.display = "flex";
//         });
//     });
//     // element.addEventListener("mouseout", function (event) {
//     //     buynowp.style.display = "flex";
//     // });
// }
// );



document.addEventListener("DOMContentLoaded",()=>{
    
    let productDetail=document.querySelectorAll(".product-detail-1");
    productDetail.forEach(node=>{
        node.addEventListener("mouseover",function(event){
            this.classList.add("product-detail-2");
        })
        node.addEventListener("mouseout",function(event){
            this.classList.remove("product-detail-2");
        })
    })

})
