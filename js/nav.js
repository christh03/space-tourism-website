const nav = document.querySelector(".nav");
const link = document.querySelectorAll(".nav__link");

const navHover = function (e) {
  e.preventDefault();
  const link = e.target;

  const siblings = link.closest(".nav").querySelectorAll(".nav__link");

  siblings.forEach((el) => {
    if (el === link) {
      if (!link.classList.contains("nav__link--active")) {
        link.style.borderBottom = this;
      }
    }
  });
};

nav.addEventListener("mouseover", navHover.bind("3px  solid  #979797"));
nav.addEventListener("mouseout", navHover.bind(""));
