let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    logIn.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    logIn.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
let logIn = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    logIn.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    logIn.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
   
}


window.onscroll = () =>{
    logIn.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slideer", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    centereSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centereSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


