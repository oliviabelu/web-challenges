console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const buttonUppercase = document.querySelector('[data-js="button-uppercase"]');

console.log(firstInput);
console.log(buttonUppercase);

buttonUppercase.addEventListener("click", () => {
  //   const inputValue = firstInput.value;
  //   const inputValueUpperCase = inputValue.toUpperCase();
  //   firstInput.value = inputValueUpperCase;
  firstInput.value = firstInput.value.toUpperCase();
});
