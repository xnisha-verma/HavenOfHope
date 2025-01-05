let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000);
showSlide();
