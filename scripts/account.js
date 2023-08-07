let container = document.querySelector(".container");
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

function getUrlParam(param){
    const urlParam=new URLSearchParams(window.location.search);
    return urlParam.get(param);
}

if(getUrlParam("mode")=="signup"){
    container.classList.add("sign-up-mode");
}

sign_up_btn.addEventListener('click', () => {
    window.location.search='mode=signup';
    container.classList.add("sign-up-mode");
    
});
sign_in_btn.addEventListener('click', () => {
    window.location.search='mode=signin';
    container.classList.remove("sign-up-mode");
});

