const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function (e) {
  header.classList.toggle("nav-open");
});
