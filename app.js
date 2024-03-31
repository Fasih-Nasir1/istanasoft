window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
  

    if (window.scrollY > 200 && window.scrollY < 600) {
      navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
});


window.addEventListener("DOMContentLoaded",function(){
    var bod=document.getElementById("body");
   var loa=document.getElementById("loader")
    bod.style.display="none";
    loa.style.display="block";

this.setInterval(function(){
    bod.style.display="block";
    loa.style.display="none";
}
// ,3400

)
})
  const swiper = new Swiper(".swiper", {
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // Default parameters
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
       
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          },
       
        }
      });









      


