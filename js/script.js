const figures = document.querySelectorAll('.figure');
const sliderBgs = document.querySelectorAll('.our__projects-bg');

sliderBgs.forEach((sliderBg) => {
    sliderBg.animate([
        { transform: 'rotate(180deg)' }
    ], {
        duration: 3000,
        easing: 'ease-in-out',
        direction: 'alternate-reverse',
        iterations: Infinity,
    });
});

figures.forEach((figure) => {
    figure.animate([
        { transform: 'rotate(180deg)' }
    ], {
        duration: 3000,
        easing: 'ease-in-out',
        direction: 'alternate-reverse',
        iterations: Infinity,
    });
});

const webSitesSlider = new Swiper('.swiper', {
    spaceBetween: 42,
    breakpoints: {
        1800: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
        1700: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 42,
        },
        1366: {
            slidesPerView: 2.5,
            spaceBetween: 42,
        },
        1200: {
            slidesPerView: 2.5,
            spaceBetween: 42,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 42,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 42,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 42,
        },
        375: {
            slidesPerView: 1.5,
            spaceBetween: 42,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 22,
        }
    }
}
);