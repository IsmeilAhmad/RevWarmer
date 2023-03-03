 $('.bxslider.text').bxSlider({
     mode: 'vertical',
     pager: false,
     controls: false,
     infiniteLoop: true,
     auto: true,
     speed: 300,
     pause: 2000
 });


 var swiper = new Swiper(".resultSwiper", {
     loop: true,
     navigation: {
         nextEl: ".swiper-button-next1",
         prevEl: ".swiper-button-prev2",
     },
 });

 var swiper = new Swiper(".testimonialSwiper", {
     slidesPerView: 2,
     loop: true,
     spaceBetween: 42,
     navigation: {
         nextEl: ".swiper-button-next3",
         prevEl: ".swiper-button-prev4",
     },
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
     breakpoints: {
         // when window width is >= 320px
         320: {
             slidesPerView: 1,
             spaceBetween: 30
         },
         // when window width is >= 480px
         768: {
             slidesPerView: 2,
             spaceBetween: 20
         },
         // when window width is >= 640px
         992: {
             slidesPerView: 2,
             spaceBetween: 42,
         }
     }
 });