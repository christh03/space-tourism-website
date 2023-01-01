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
