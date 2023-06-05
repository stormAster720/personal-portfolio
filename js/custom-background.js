const customBackground = document.querySelectorAll('.introductory__hero-container-image');

// Iterate over the selected elements
customBackground.forEach((img) => {
  // Get the value of the "data-url" attribute
  const imageUrl = img.dataset.url;

  // Set the background image URL for each element as well as their gradient
  img.style.backgroundImage = ` linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(0, 0, 0, 0.8) 50%), url(${imageUrl})`;
});