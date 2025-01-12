const navList = document.querySelectorAll(".nav-list li");
const nav = document.querySelector(".nav-list");

const kid = document.querySelector(".kid");
const women = document.querySelector(".women");
const men = document.querySelector(".men");

const scrollSection = document.querySelectorAll(".card__wrapper");

nav.addEventListener("click", (e) => {
  navList.forEach((element) => {
    if (e.target !== element && e.target !== nav) {
      element.querySelector("a").classList.remove("active-tab");
      e.target.classList.add("active-tab");
      kid.style.display = "none";
      women.style.display = "none";
      men.style.display = "none";
      e.target.innerText == "ბავშვი" && (kid.style.display = "flex");
      e.target.innerText == "ქალი" && (women.style.display = "flex");
      e.target.innerText == "კაცი" && (men.style.display = "flex");
    }
  });
});

scrollSection.forEach((element) => {
  element.addEventListener("wheel", (e) => {
    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    const atStart = element.scrollLeft === 0;
    const atEnd = element.scrollLeft === maxScrollLeft;

    if (!(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
      e.preventDefault();
      element.scrollLeft += event.deltaY;
    }
  });
});
