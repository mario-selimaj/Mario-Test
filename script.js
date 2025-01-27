const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

let itemWidth = carouselItems[0].offsetWidth;
let itemsToShow = 3;  
let currentIndex = 0;

function updateItemsToShow() {
    const carouselWidth = carousel.offsetWidth;

    if (window.innerWidth < 768) {
        itemsToShow = 1;
    } else {
        itemsToShow = Math.floor(carouselWidth / itemWidth); 
    }

    itemWidth = carouselItems[0].offsetWidth; 
}

function updateCarouselPosition() {
    const totalItems = carouselItems.length;

    if (currentIndex < 0) currentIndex = totalItems - itemsToShow; 
    if (currentIndex >= totalItems) currentIndex = 0; 

    const offset = currentIndex * itemWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
}

leftArrow.addEventListener('click', () => {
    currentIndex--;
    updateCarouselPosition();
});

rightArrow.addEventListener('click', () => {
    currentIndex++;
    updateCarouselPosition();
});

window.addEventListener('resize', () => {
    updateItemsToShow(); 
    updateCarouselPosition(); 
});


updateItemsToShow(); 
updateCarouselPosition(); 
