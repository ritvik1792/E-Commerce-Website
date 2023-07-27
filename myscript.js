document.addEventListener("DOMContentLoaded", () => {
    var addtocart = document.querySelectorAll(".addcart");
    var buynowp = document.querySelectorAll(".buynowp")


    addtocart.forEach(function(element,index) {
        element.addEventListener("mouseover", function (event) {
            buynowp[index].style.display = "none";
        });
        element.addEventListener("mouseout", function (event) {
            buynowp[index].style.display = "flex";
        });
    });
    buynowp.forEach(function(element,index) {
        element.addEventListener("mouseover", function (event) {
            addtocart[index].style.display = "none";
        });
        element.addEventListener("mouseout", function (event) {
            addtocart[index].style.display = "flex";
        });
    });
    // element.addEventListener("mouseout", function (event) {
    //     buynowp.style.display = "flex";
    // });
}
);

