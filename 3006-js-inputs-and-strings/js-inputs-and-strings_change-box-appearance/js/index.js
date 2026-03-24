console.clear();

const box = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener("input", () => {
  const colorValue = inputColor.value;
  console.log(inputColor);
  box.style.backgroundColor = `hsl(${colorValue}, 70%, 60%)`;
});

inputRadius.addEventListener("input", () => {
  const radius = inputRadius.value;
  console.log(radius);
  box.style.borderRadius = `${radius}%`;
});

inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value;
  console.log(box.style);
  box.style.rotate = `${rotation}deg`;
});
