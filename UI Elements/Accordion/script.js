const headings = document.querySelectorAll("section");

console.log(headings);
headings.forEach((heading, index) => {
  heading.addEventListener("click", (event) => {
    event.currentTarget.children[1].classList.toggle("active");
  });
});
