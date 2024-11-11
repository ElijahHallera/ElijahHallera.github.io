// Select the left column items and right column sections
const leftItems = document.querySelectorAll('#left-column p');
const rightSections = document.querySelectorAll('#right-column h2');

document.getElementById('scrollToTopLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Function to style the current section in the left column
function styleLeftColumn() {
    const scrollPosition = window.scrollY; // Get the current scroll position
    let currentSection = null;

    // Check if at the top of the page
    if (scrollPosition === 0) {
        leftItems.forEach(item => {
            item.classList.remove('bold');
            item.classList.remove('large');
        });
        leftItems[0].classList.add('bold');
        leftItems[0].classList.add('large');
        return;
    }

    // Loop through right column sections to find which one is currently in view
    rightSections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = index;
        }
    }); 

    if (currentSection !== null) {
        leftItems.forEach(item => {
            item.classList.remove('bold');
            item.classList.remove('large');
        });

        leftItems[currentSection].classList.add('bold');
        leftItems[currentSection].classList.add('large');
    }
}

// Select carousel elements
const slides = document.querySelectorAll('.carousel .carousel-item');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to update the carousel based on currentIndex
function updateCarousel() {
    // Move the carousel to show the current slide
    const offset = -currentIndex * 100; // Move left
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.opacity = 1;  // Make the current slide visible
            slide.style.zIndex = 1;  // Bring the current slide to the front
        } else {
            slide.style.opacity = 0;  // Hide non-current slides
            slide.style.zIndex = 0;  // Send non-current slides behind
        }
    });
}

// Event listeners for next and previous buttons
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

window.addEventListener('scroll', styleLeftColumn);

updateCarousel();
styleLeftColumn();