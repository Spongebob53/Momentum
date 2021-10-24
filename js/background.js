const images = [
  "minions-light.jpg",
  "minions-rest.jpg",
  "spongebob-house.jpg",
  "spongebob-riding.jpg",
  "toystory-3.jpg",
  "toystory-pixar.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
