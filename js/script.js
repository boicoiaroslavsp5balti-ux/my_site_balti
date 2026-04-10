const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const pageName = document.body.dataset.page;

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.dataset.link === pageName) {
    link.classList.add("is-active");
  }
});
