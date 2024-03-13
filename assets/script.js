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

//Déclaration des variables
let i = (j = 0);
let gch = document.querySelector(".arrow_left");
let dte = document.querySelector(".arrow_right");
let photo = document.querySelector(".banner-img");
let tag = document.querySelector(".texte");
let points = document.querySelectorAll(".dot");

console.log("Slide N°", i + 1, ", point N°", j + 1);

// Fonction pour changer l'image et le texte du slider
function ChangeSlide(i) {
  photo.src = `assets/images/slideshow/${slides[i].image}`;
  tag.innerHTML = `${slides[i].tagLine}`;
}

// Fonction pour faire correspondre les bullet points aux images du slider
function ChangeDot(j) {
  points.forEach((dot, i) => {
    if (j === i) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Event listener sur la fleche droite
dte.addEventListener("click", () => {
  console.log("click sur la flèche droite");
  if (i >= 0 && i < slides.length - 1) {
    ChangeSlide(i + 1);
    ChangeDot(j + 1);
    i++;
    j++;
    console.log("Slide N°", i + 1, ", point N°", j + 1);
  } else {
    i = 0;
    j = 0;
    ChangeSlide(i);
    ChangeDot(j);
    console.log("Slide N°", i + 1, ", point N°", j + 1);
  }
});

// Event listener sur la fleche gauche
gch.addEventListener("click", () => {
  console.log("click sur la flèche gauche");
  if (i > 0 && i <= slides.length) {
    ChangeSlide(i - 1);
    ChangeDot(j - 1);
    i--;
    j--;
    console.log("Slide N°", i + 1, ", point N°", j + 1);
  } else {
    i = slides.length - 1;
    j = slides.length - 1;
    ChangeSlide(i);
    ChangeDot(j);
    console.log("Slide N°", i + 1, ", point N°", j + 1);
  }
});
