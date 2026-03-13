const carousel = document.getElementById('carousel');

// 1. Clonamos o conteúdo para criar a ilusão de infinitude
carousel.innerHTML += carousel.innerHTML;

let scrollStep = 1;
const delay = 10; // Aumentei um pouco para ficar mais suave

function autoScroll() {
    carousel.scrollLeft += scrollStep;

    // 2. Quando o scroll chegar na metade (fim do conteúdo original)
    // nós resetamos para o zero instantaneamente. 
    // Como o conteúdo é idêntico, o olho humano não percebe.
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
    }
}

let timer = setInterval(autoScroll, delay);

