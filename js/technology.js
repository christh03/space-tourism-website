const tabsContainer = document.querySelector(".technology__tab-container");
const tabs = document.querySelectorAll(".technology__tab");
const tabsContent = document.querySelectorAll(".technology__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".technology__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("technology__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("technology__content--active"));

  clicked.classList.add("technology__tab--active");
  document
    .querySelector(`.technology__content--${clicked.dataset.tab}`)
    .classList.add("technology__content--active");
});
