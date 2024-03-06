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

let i = 0;
let j = 0;

console.log("i=", i, " et j=", j);

function ChangeSlide(i) {
  document.querySelector(
    ".banner-img"
  ).src = `assets/images/slideshow/${slides[i].image}`;
  document.querySelector(".texte").innerHTML = `${slides[i].tagLine}`;
}

// function ChangeDot(j) {
//   let dot = document.querySelectorAll(".dot");

//   dot.classList.add(".dot_selected");
// }

// Event listeners sur les fleches
let gch = document.querySelector(".arrow_left");
let dte = document.querySelector(".arrow_right");

dte.addEventListener("click", () => {
  console.log("clicks sur la flèche droite");
  if (i >= 0 && i < slides.length - 1) {
    ChangeSlide(i + 1);
    // ChangeDot(i + 1);
    i++;
    console.log("i=", i, " et j=", j);
  } else {
    i = 0;
    ChangeSlide(i);
    // ChangeDot(i);
    console.log("i=", i, " et j=", j);
  }
});

gch.addEventListener("click", () => {
  console.log("clicks sur la flèche gauche");
  if (i > 0 && i <= slides.length) {
    ChangeSlide(i - 1);
    // ChangeDot(i - 1);
    i--;
    console.log("i=", i, " et j=", j);
  } else {
    i = slides.length - 1;
    ChangeSlide(i);
    // ChangeDot(i);
    console.log("i=", i, " et j=", j);
  }
});
