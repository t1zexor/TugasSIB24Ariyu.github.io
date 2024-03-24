document.addEventListener('DOMContentLoaded', function () {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlideIndex = 0;
  let imageIndex = 0; // Tambahkan definisi variabel imageIndex
  const totalItems = 3; // Tambahkan definisi variabel totalItems

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

  // Function to change image in the carousel
  function changeImage() {
      const Image = document.getElementById('carousel-image'); // Definisikan variabel image
      const image = [ // Array of image URLs
          'logo_php.png',
          'logo_mysql.png',
          'logo_python.png',
          'logo_php.png',
          'logo_mysql.png',
          'logo_python.png'
      ];
      image.src = image[imageIndex];
  }

  // Function to show next image
  function nextImage() {
      imageIndex = (imageIndex + 1) % totalItems;
      changeImage();
  }

  // Function to show previous image
  function prevImage() {
      imageIndex = (imageIndex - 1 + totalItems) % totalItems;
      changeImage();
  }
// Add event listeners to prev and next buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide); 

// Event listeners for navigation buttons
document.getElementById('prevBtn').addEventListener('click', prevImage);
document.getElementById('nextBtn').addEventListener('click', nextImage);

  // Show the first slide initially
  showSlide(currentSlideIndex);
});
