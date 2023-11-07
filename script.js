const imagesAndCaptions = [
  { imageUrl: "image1.jpg", caption: "Caption 1" },
  { imageUrl: "image2.jpg", caption: "Caption 2" },
  { imageUrl: "image3.jpg", caption: "Caption 3" },
  { imageUrl: "image4.jpg", caption: "Caption 4" },
  // Add more images and captions as needed
];

let shuffledArray = shuffleArray(imagesAndCaptions);

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function loadRandomImageAndCaption() {
  if (shuffledArray.length === 0) {
    shuffledArray = shuffleArray(imagesAndCaptions);
  }

  const randomImage = shuffledArray.pop();

  const randomImageElement = document.getElementById("random-image");
  const captionElement = document.getElementById("caption-text");

  randomImageElement.src = randomImage.imageUrl;
  captionElement.innerText = randomImage.caption;

  // Hide the caption initially
  document.getElementById("caption").classList.add("d-none");
}

document.getElementById("show-caption").addEventListener("click", function () {
  document.getElementById("caption").classList.remove("d-none");
});

document
  .getElementById("new-image")
  .addEventListener("click", loadRandomImageAndCaption);

loadRandomImageAndCaption();
