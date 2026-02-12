const carousel = document.getElementById('carousel');

let scrollAmount = 0;
const scrollStep = 1;
const delay = 10;

function autoScroll() {
    carousel.scrollLeft += scrollStep;

    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
    }
}

let timer = setInterval(autoScroll, delay);

carousel.addEventListener('mouseenter', () => {
    clearInterval(timer);
});

carousel.addEventListener('mouseleave', () => {
    timer = setInterval(autoScroll, delay);
});
