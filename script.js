// Open and Close Navbar Menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
   burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      bgOverlay.classList.toggle("is-active");
   });

   bgOverlay.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.remove("is-active");
   });
});

// Open and Close Search Bar Toggle
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");


if (searchToggle && searchCancel) {
   searchToggle.addEventListener("click", () => {
      searchBlock.classList.add("is-active");
   });

   searchCancel.addEventListener("click", () => {
      searchBlock.classList.remove("is-active");
   });
}


const userCircle = document.querySelector(".bx-user-circle");
const loginForm = document.querySelector(".login__form");
const x = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay1");

// function start
const openModal = function (){
   loginForm.classList.remove("hidden");
   overlay.classList.remove("hidden");
}
const closeModal = function(){
   loginForm.classList.add("hidden");
   overlay.classList.add("hidden");
}
// function end

userCircle.addEventListener("click",openModal);
x.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal)

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !loginForm.classList.contains("hidden")) {
    if (!loginForm.classList.contains("hidden")) {
   }
   closeModal();
 }
});


userCircle.addEventListener("click",openModal);
x.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal)





