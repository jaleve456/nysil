const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
//use console log to view in console to see if logic works

//buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1; //starts counter on first image
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';

//button listeners 

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return; // so that container is not empty
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
});

// Infinite loop logic
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        // moves left from first real image to lastClone at index 0
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2; // index of last real image
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        //moves right from last real image to firstClone at last index
        carouselSlide.style.transition = "none";
        counter = 1; // index of first real image
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
