let slideIndex = 0;
let slideContainer;
let currentSlide;
let nextSlide;

let buffer = 40;

let slideTransitionDuration = 500;
let slideLength = 6000;

const setSlide = (element, data) => {
    element.style.backgroundImage = data['image'];
    element.innerHTML = data['content'];
    element.classList.forEach((cls) => {element.classList.remove(cls)});
    element.classList.add(data['name']);
};

const advanceSlide = () => {
    // step 0: prep next slide
    slideIndex = (slideIndex + 1) % slides.length;
    setSlide(nextSlide, slides[slideIndex]);
    nextSlide.style.visibility = '';
    console.log('sliiiide');
    setTimeout(() => {
        // step 1: move them over
        currentSlide.style.transitionDuration = slideTransitionDuration / 1000 + 's';
        nextSlide.style.transitionDuration = slideTransitionDuration / 1000 + 's';
        currentSlide.style.left = -100-buffer+'%';
        nextSlide.style.left = '0';
        setTimeout(() => {
            // step 2: swap the current slide element back into place
            setSlide(currentSlide, slides[slideIndex])
            console.log('take it back now y\'all');
            currentSlide.style.transitionDuration = '0s';
            currentSlide.style.left = '0';
            // slideContainer.background = slides[slideIndex]['bg'];
                // step 3: hide the next slide element
                setTimeout(() => {
                    nextSlide.style.transitionDuration = '0s';
                    nextSlide.style.visibility = 'hidden';
                    nextSlide.style.left = 100+buffer+'%';
                    nextSlide.style.backgroundImage = '';
                }, 10);
        }, slideTransitionDuration);
    }, 10);
};

document.addEventListener('DOMContentLoaded', (evt) => {
    slideContainer = document.getElementById('side-scrolling-image-container');
    currentSlide = document.getElementById('current-slide-container');
    nextSlide = document.getElementById('next-slide-container');

    // fetch everything at least once so we have it cached
    for (let i in slides) {
        nextSlide.style.backgroundImage = slides[i]['image'];
    }
    nextSlide.style.backgroundImage = '';

    setSlide(currentSlide, slides[0]);
    setInterval(advanceSlide, slideLength + slideTransitionDuration);
});