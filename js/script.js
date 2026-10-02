var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
grid: {
  rows: 1,
  fill: "row"
},
spaceBetween: 15,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-next-custom", 
  prevEl: ".swiper-button-prev-custom", 
},


breakpoints:{
  
  640:{
    grid: {
      rows: 2,
      fill: "row"
    },
    slidesPerView: 2,
    spaceBetween: 10,
  },
}
});


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});


// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add('hidden');
}

});