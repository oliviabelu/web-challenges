console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let counter = 1; counter < 6; counter++) {
    const img = document.createElement("img");
    counter <= filledStars
      ? (img.src = "assets/star-filled.svg")
      : (img.src = "assets/star-empty.svg");

    img.addEventListener("click", () => {
      renderStars(counter);
    });
    starContainer.append(img);
  }

  // --^-- write or modify code above this line --^--
}

renderStars();
