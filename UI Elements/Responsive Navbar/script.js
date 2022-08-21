const toggleBtn = document.querySelector(".toggle-btn");
const navbarLinks = document.querySelector(".navbar-links");

let rotation = 0;

toggleBtn.addEventListener("click", () => {
  rotation += 90;
  if (rotation >= 180) {
    rotation = 0; // to not let it rotate 360deg
  }
  navbarLinks.classList.toggle("active");
  toggleBtn.style.transform = `rotate(${rotation}deg)`;
  toggleBtn.style.transition = "0.5s";
});
