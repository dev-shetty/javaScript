// Web Dev Simplifed Tutorial

const body = document.body;

// ###### Add elements to the page #######
body.append("Hello World");   // .append can append strings too
// body.append("Hello", "World") // can append more than one item too

// body.appendChild();    // .appendChild cant append strings it requires node

// Create element
const newDiv = document.createElement("newDiv");  // creating the div

// Add text to the div
newDiv.innerText = "Hello World";
newDiv.textContent = "Hello World textContent";

// textContent prints out indentation and also the invisible text <-- displays like it is in HTML
// innerText only prints the visible text

// Note: creating doesnt add to page so we have to add it using another command
body.append(newDiv);

// Add HTML from JS
newDiv.innerHTML = "<strong>HELLO WORLD</strong>"  // Very Risky in terms of security


// Does the same as innerHTML but much more secure
const strong = document.createElement("strong");
strong.innerText = "HELLO WORLD";
newDiv.append(strong);


const div = document.querySelector("div");
const spanHi = document.getElementById("hi");
const spanBye = document.getElementById("bye");

// Remove elements from DOM
spanBye.remove();   // Better
div.append(spanBye);    // Add it back

// Another method
div.removeChild(spanBye);


// Modify attributes
console.log(spanHi.getAttribute("id")); // prints the id
console.log(spanHi.id); // works same so better

console.log(spanHi.getAttribute("title")); // prints the title
console.log(spanHi.title); // works same so better

// Set attribute
spanHi.setAttribute("title", "Different");
spanHi.removeAttribute("id"); // removes attribute


// Data attributes - these start with data- and can have any name and any value
console.log(spanHi.dataset);    // Shows all the datasets
console.log(spanHi.dataset.test);   // See the data of test

// Add a new dataset
spanHi.dataset.newName = "Hi";



// Add new classes
spanBye.classList.add("tata");

// Remove the class
spanBye.classList.remove("Seeya");

// toggle - it removes the class if it exists or adds it if it doesn't
spanBye.classList.toggle("tata"); // here it removes since it exists
spanBye.classList.toggle("seeya"); // here it adds since it doesn't exist

spanBye.classList.toggle("seeya", false)    // false makes it delete it
spanBye.classList.toggle("seeya", true)     // true makes it add it


// Get all the class
console.log(spanBye.classList)  // Gives a list
console.log(spanBye.className)  // Gives normal class names


// Modifying the style properties
spanHi.style.color = "orange";
spanHi.style.backgroundColor = "blue";
spanHi.style.fontSize = "2em";