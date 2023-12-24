let slideIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= totalSlides || n < 0) {
        slideIndex = 0; // Reset to the first slide when reaching the end
    }

    const offset = slideIndex * -100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    slideIndex -= 1;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex += 1;
    showSlide(slideIndex);
}

// Auto play slides every 3 seconds
setInterval(() => {
    nextSlide();
}, 4000);

// Initial slide display
showSlide(slideIndex);
