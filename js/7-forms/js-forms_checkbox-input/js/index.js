console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

console.log(tosError);
console.log(tosCheckbox.checked);
//tosError.hidden = true;

hideTosError();

success.hidden = true;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked) {
    // eslint-disable-next-line no-alert
    success.hidden = false;
    alert("Form submitted");
  } else {
    showTosError();
  }
  // --^-- write your code here --^--
  // event.target.reset();
  // event.target.elements.firstName.focus();
});

tosCheckbox.addEventListener("click", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
