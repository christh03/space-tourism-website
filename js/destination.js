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
  const tabs = e.target.closest(".destination__tab");
  if (!tabs.classList.contains("destination__tab--active")) {
    tabs.classList.add("tab-hover");
  }
};

const handleHoverOut = function (e) {
  e.preventDefault();
  const tabs = e.target.closest(".destination__tab");
  if (!tabs.classList.contains("destination__tab--active")) {
    tabs.classList.remove("tab-hover");
  }
};

tabsContainer.addEventListener("mouseover", handleHover);
tabsContainer.addEventListener("mouseout", handleHoverOut);

tabs.forEach((t) =>
  t.addEventListener("click", function (e) {
    e.preventDefault();
    e.target.classList.remove("tab-hover");
  })
);
