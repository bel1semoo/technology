var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".seiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewhell: true,
    keyboard: true,
});