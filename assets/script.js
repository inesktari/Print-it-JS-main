const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Event listeners sur les fleches
let gch = document.querySelector(".arrow_left");
let dte = document.querySelector(".arrow_right");

dte.addEventListener("click", () => {
  console.log("clicks sur la flèche droite");
});

gch.addEventListener("click", () => {
  console.log("clicks sur la flèche gauche");
});
