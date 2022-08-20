const toggleBtn = document.querySelector(".toggle-btn > button");
const toggleNav = document.querySelector("#toggle-nav");
const main = document.querySelector("main");

toggleBtn.addEventListener("click", () => {
  toggleNav.classList.toggle("display-condition");
  toggleBtn.style.transform = "rotate(90deg) scale(1.5)";
  toggleBtn.style.transition = "500ms";
  if (toggleBtn.classList.contains("display-condition")) {
    main.style.width = "100vw";
  } else {
    main.style.width = "75vw";
    main.style.marginLeft = "auto";
  }
});
