const carousel = document.getElementById('carousel');

// Clonamos o conteúdo para criar a ilusão de infinitude
carousel.innerHTML += carousel.innerHTML;

let scrollStep = 1;
const delay = 10;

let timer = setInterval(autoScroll, delay);

function autoScroll() {
    carousel.scrollLeft += scrollStep;

    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
    }
}


/*/ Pausar ao passar o mouse
carousel.addEventListener('mouseenter', () => {
    clearInterval(timer);
});

// Retomar ao sair o mouse
carousel.addEventListener('mouseleave', () => {
    timer = setInterval(autoScroll, delay);
}); */