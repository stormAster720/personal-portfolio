const images = document.querySelectorAll('.app__icons-grid img');
const iconsGrid = document.querySelector('.app__icons-grid');
const textElement = document.getElementById('app__icons-text');
const ogContent = textElement.innerHTML;

let isHidden = false;

function resetImages() {
  images.forEach((image) => {
    image.style.opacity = '1';
    image.style.pointerEvents = 'auto';
    image.style.transition = 'opacity 0.3s ease';
  });
}

function showTextWithDelay(text) {
  textElement.style.opacity = '0';
  textElement.style.transition = 'opacity 0.3s ease';

  setTimeout(() => {
    textElement.innerHTML = text;
    textElement.style.opacity = '1';
  }, 300);
}

function hideImagesExcept(clickedImage) {
  images.forEach((image) => {
    if (image !== clickedImage) {
      image.style.opacity = '0';
      image.style.pointerEvents = 'none';
      image.style.transition = 'opacity 0.3s ease';
    }
  });
}

// Event listener for clicking on an element
iconsGrid.addEventListener('click', (event) => {
  if (isHidden && !event.target.matches('.app__icons-grid img')) {
    resetImages();
    showTextWithDelay(ogContent);
    iconsGrid.style.backgroundImage = '';
    isHidden = false;
  }
});

images.forEach((image) => {
  image.addEventListener('click', () => {
    const imageUrl = image.getAttribute('src');
    const description = image.getAttribute('data-description').replace(/\\n/g, '<br>');

    iconsGrid.style.backgroundImage = `url(${imageUrl})`;
    image.style.opacity = '0';
    image.style.pointerEvents = 'none';
    image.style.transition = 'opacity 0.3s ease';

    hideImagesExcept(image);
    showTextWithDelay(description);

    isHidden = true;
  });
});