const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
//use console log to view in console to see if logic works

//buttons

if (carouselSlide && carouselImages.length > 0) {
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
    if (!carouselImages[counter]) return; // prevents undefined errors

    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
}

const hamburger = document.querySelector(".hamburger-icon");
const navBar = document.querySelector(".nav-bar")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
});

// IMAGE MODAL LOGIC
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");
const closeButton = document.querySelector(".modal .close");

document.querySelectorAll(".quick-view-btn").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".shop-card");

        // Get the product image
        const img = card.querySelector("img");

        // Get the product description text
        const description = card.querySelector(".description").innerHTML;

        // Fill modal
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = description;
    });
});

// Close modal
closeButton.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};
