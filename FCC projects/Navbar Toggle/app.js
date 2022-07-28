// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const toggleButton = document.querySelector(".nav-toggle");
const links = document.querySelector(".links")

toggleButton.addEventListener("click", () => {
    console.log(links.classList);
    links.classList.toggle("show-links");
    // toggle -> if class is not present then it adds the class or if the class is present it removes the class
    // Same as the below code with if-else
    // if(links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // } 

});