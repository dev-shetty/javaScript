const ellipse1 = document.getElementById("Ellipse1")
const ellipse2 = document.getElementById("Ellipse2")
const ellipse3 = document.getElementById("Ellipse3")
const load = document.getElementById("load")

const colors = [
  "white",
  "blanchedalmond",
  "purple",
  "orange",
  "green",
  "lightblue",
  "hotpink",
  "darkblue",
  "tomato",
  "yellow",
]

function randomNumbers(value) {
  return Math.floor(Math.random() * value)
}

load.addEventListener("click", () => {
  ellipse1.style.fill = colors[randomNumbers(colors.length)]
  ellipse2.style.fill = colors[randomNumbers(colors.length)]
  ellipse3.style.fill = colors[randomNumbers(colors.length)]
})

// ellipse1.style.fill = `rgb(${randomNumbers(255)}, ${randomNumbers(255)}, ${randomNumbers(255)})`
