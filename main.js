let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');

    user.classList.remove('active');
    
}

    

let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');

    user.classList.remove('active');
}




let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".new-arrival", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            568: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
});