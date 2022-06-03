import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
      
        const swiper = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                });

                export default swiper;