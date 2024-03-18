document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlideIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach(function (slide, i) {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    // Function to move to the previous slide
    function prevSlide() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        showSlide(currentSlideIndex);
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    // Add event listeners to prev and next buttons
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Show the first slide initially
    showSlide(currentSlideIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    // Array of image URLs
    const images = [
        'logo php.png',
        'logo mysql.png',
        'logo python.png'
    ];

    // Function to change image in the carousel
    function changeImage(index) {
        carouselItems.forEach(item => item.style.display = 'none');
        carouselItems[index].style.display = 'block';
    }

    // Function to show next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalItems;
        changeImage(currentIndex);
    }

    // Function to show previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        changeImage(currentIndex);
    }

    // Initial setup
    changeImage(currentIndex);

    // Event listeners for navigation buttons
    document.getElementById('prevBtn').addEventListener('click', prevImage);
    document.getElementById('nextBtn').addEventListener('click', nextImage);

    // Optional: Auto slideshow
    // Uncomment the following lines to enable auto slideshow
    // setInterval(nextImage, 5000); // Change image every 5 seconds
});
