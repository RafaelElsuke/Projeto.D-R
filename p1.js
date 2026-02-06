const carousel= document.getElementById('carousel');
let scrollAmont=0;
const scrollStep=2;
const delay= 30;

function autoScroll(){
    carousel.scrollLeft += scrollStep;
    if(carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth)){
        carousel.scrollLeft = 0;
    }
    
} 
let time = setInterval(autoScroll, delay);
carousel.addEventListener('mouseenter', () =>clearInterval(timer));
carousel.addEventListener('mouseleave',()=>clearInterval(autoScroll,delay));