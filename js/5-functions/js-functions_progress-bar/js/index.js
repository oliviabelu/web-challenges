console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

// console.log(window.scrollY);
// console.log(window.innerHeight);
// console.log(document.body.clientHeight);

function calculateScrollPercentage() {
  return (
    (window.scrollY * 100) / (document.body.clientHeight - window.innerHeight)
  );
}

document.addEventListener("scroll", () => {
  progressBar.style.width = calculateScrollPercentage() + "%";
});
