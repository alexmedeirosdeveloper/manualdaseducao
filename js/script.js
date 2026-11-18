document.addEventListener("DOMContentLoaded", () => {

    iniciarNavbar();

    iniciarAccordion();

    iniciarAnimacoes();

    iniciarDepoimentos();

    iniciarAnoAtual()

});

function iniciarNavbar() {

    const navbar = document.querySelector(".navbar-custom");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}

function iniciarAccordion() {

}

function iniciarAnimacoes(){

    AOS.init({

        duration:900,

        easing:"ease",

        once:true,

        offset:80

    });

}

function iniciarDepoimentos() {

    const elementoSwiper = document.querySelector(".testimonial-swiper");

    if (!elementoSwiper) {
        return;
    }

    if (typeof Swiper === "undefined") {
        console.error("A biblioteca Swiper não foi carregada.");
        return;
    }

    new Swiper(elementoSwiper, {

        loop: true,

        speed: 700,

        spaceBetween: 24,

        grabCursor: true,

        watchOverflow: true,

        autoplay: {

            delay: 4500,

            disableOnInteraction: false,

            pauseOnMouseEnter: true

        },

        pagination: {

            el: elementoSwiper.querySelector(".swiper-pagination"),

            clickable: true

        },

        navigation: {

            nextEl: elementoSwiper.querySelector(".swiper-button-next"),

            prevEl: elementoSwiper.querySelector(".swiper-button-prev")

        },

        keyboard: {

            enabled: true,

            onlyInViewport: true

        },

        breakpoints: {

            0: {

                slidesPerView: 1

            },

            768: {

                slidesPerView: 2

            },

            1200: {

                slidesPerView: 3

            }

        }

    });

}

function iniciarAnoAtual() {

    const elementoAno = document.querySelector("#current-year");

    if (!elementoAno) {
        return;
    }

    elementoAno.textContent = new Date().getFullYear();

}