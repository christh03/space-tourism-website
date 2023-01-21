const tabsContent = document.querySelectorAll(".crew__content");
const tabsContainer = document.querySelector(".crew__tab-container");
const tabs = document.querySelectorAll(".crew__tab");

tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".crew__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("crew__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("crew__content--active"));

  clicked.classList.add("crew__tab--active");
  document
    .querySelector(`.crew__content--${clicked.dataset.tab}`)
    .classList.add("crew__content--active");
});

const handleHover = function (e) {
  e.preventDefault();
  const tab = e.target;
  const siblings = tab
    .closest(".crew__tab-container")
    .querySelectorAll(".crew__tab");
  siblings.forEach((el) => {
    if (el === tab) {
      if (!tab.classList.contains("crew__tab--active")) {
        tab.style.backgroundColor = this;
      }
    }
  });
};

tabsContainer.addEventListener(
  "mouseover",
  handleHover.bind("rgba(255, 255, 255, 0.5)")
);
tabsContainer.addEventListener("mouseout", handleHover.bind(""));

tabs.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    e.target.style = "";
  });
});
