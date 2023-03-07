let button = document.querySelector('.button');
let sleepBtn = document.querySelector(".login__btn")
let modalBig = document.querySelector(".modal");
let overlay = document.querySelector(".modal__overlay");





button.addEventListener("click", function(){
    modalBig.style.display = "grid"
})

sleepBtn.addEventListener("click" , function(){
    modalBig.style.display = "none"
} )

overlay.addEventListener("click" , function(){
    modalBig.style.display = "none"
} )



let openBtn = document.querySelector(".open__btn");
let navMenu = document.querySelector(".menu");
let closeBtn = document.querySelector(".closeBtn");


openBtn.addEventListener("click", ()=>{
    navMenu.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display= "flex";
    openBtn.classList.toggle("show__btn");
   
})

function closeNav() {
    closeBtn.style.display = "none";
    navMenu.style.display = "none";
    openBtn.style.display = "flex"
}