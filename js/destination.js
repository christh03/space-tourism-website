const tabsContainer = document.querySelector(".destination__tab-container");
const tabs = document.querySelectorAll(".destination__tab");
const tabsContent = document.querySelectorAll(".destination__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".destination__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("destination__tab--active"));
  tabsContent.forEach((c) =>
    c.classList.remove("destination__content--active")
  );

  clicked.classList.add("destination__tab--active");
  document
    .querySelector(`.destination__content--${clicked.dataset.tab}`)
    .classList.add("destination__content--active");
});

const handleHover = function (e) {
  e.preventDefault();
  const tab = e.target;
  const siblings = tab
    .closest(".destination__tab-container")
    .querySelectorAll(".destination__tab");
  siblings.forEach((el) => {
    if (el === tab) {
      if (!tab.classList.contains("destination__tab--active")) {
        tab.style.borderBottom = this;
      }
    }
  });
};

tabsContainer.addEventListener(
  "mouseover",
  handleHover.bind("3px  solid  #979797")
);
tabsContainer.addEventListener("mouseout", handleHover.bind(""));

tabs.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    e.target.style = "";
  });
});
