const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

const main = document.querySelector('[data-js="main"]');

function renderColorBox(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;

  main.append(colorBox);
  //--^--nicht nötig zu query selecten, geht auch : document.body.append(colorBox)
}

colors.forEach((color) => {
  renderColorBox(color);
});
//--^--ok aber kürzer so --v--

colors.forEach(renderColorBox);
