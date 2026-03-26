/*  -----------------------------------------------------------
            Challenge 1: Card Background Fade
---------------------------------------------------------------- */

const changeColorButton = document.querySelector("[data-js=changeColorButton]");
const colorChangeCard = document.querySelector("[data-js=colorChangeCard]");
const colors = ["#e0f7fa", "#ffe0b2", "#c8e6c9", "#ffccbc", "#d1c4e9"]; // Light pastel colors
let currentColorIndex = 0;

changeColorButton.addEventListener("click", () => {
  // Add your solution below
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  colorChangeCard.style.backgroundColor = colors[currentColorIndex];

  // switch (colorChangeCard.style.backgroundColor) {
  //   case "":
  //     colorChangeCard.style.backgroundColor = colors[1];
  //     break;
  //   case colors[0]:
  //     colorChangeCard.style.backgroundColor = colors[1];
  //     break;
  //   case colors[1]:
  //     colorChangeCard.style.backgroundColor = colors[2];
  //     break;
  //   case "colors[2]":
  //     colorChangeCard.style.backgroundColor = colors[3];
  //     break;
  //   case "colors[3]":
  //     colorChangeCard.style.backgroundColor = colors[4];
  //     break;
  //   case "colors[4]":
  //     colorChangeCard.style.backgroundColor = colors[0];
  //     break;
  // }
});

/*  -----------------------------------------------------------
            Challenge 2: Button Hover Size Change
---------------------------------------------------------------- */

// No JavaScript needed as CSS :hover pseudo-class handles the animation.
// We included a basic click active state for completeness.

/*  -----------------------------------------------------------
            Challenge 3: Loading Spinner Toggle
---------------------------------------------------------------- */
const toggleLoaderButton = document.querySelector(
  "[data-js=toggleLoaderButton]",
);
const loaderContainer = document.querySelector("[data-js=loaderContainer]");
let loaderActive = false;

toggleLoaderButton.addEventListener("click", () => {
  // Add your solution below
  console.log("test");
  loaderContainer.classList.toggle("loader-container--active");
});

/*  -----------------------------------------------------------
            Challenge 4: Slide-in Div
---------------------------------------------------------------- */
const slideInButton = document.querySelector("[data-js=slideInButton]");
const slideInBox = document.querySelector("[data-js=slideInBox]");

slideInButton.addEventListener("click", () => {
  // Add your solution below
  slideInBox.classList.toggle("slideInBox");
  if (slideInBox.classList.slideInBox) {
    slideInBox.style.transform:translateX(0);
  }
});
