const radioBtns = document.querySelectorAll("input[type='radio']");

const btn = document.querySelector(".btn");
const colorsOptionBox = document.querySelector(".colorsOptions");

btn.addEventListener("click", (el) => {
  colorsOptionBox.classList.toggle("active");
});
console.log(radioBtns);
