import { config } from "./config.js";

// "Uncaught SyntaxError: Cannot use import statement outside a module": 
// Used type="module" in HTML to avoid this error

const div = document.getElementById("APOD");
const title = document.getElementById("title-of-the-day");
const image = document.getElementById("image-of-the-day");
const date = document.getElementById("date");
const description = document.getElementById("description");
const download = document.getElementById("download-button");



const URL = "https://api.nasa.gov/planetary/apod?api_key="; 
const api_key = config.apiKey;

fetch(`${URL}${api_key}`).then(response => response.json()).then(data => {
    console.log(data);

    const dataTitle = data.title;
    const dataImage = data.hdurl;
    const dataDate = data.date;
    const dataDesc = data.explanation;
    
    image.setAttribute("src", dataImage);
    title.append(dataTitle);
    date.append(dataDate);
    description.append(dataDesc);

    download.addEventListener("click", downloadImage);

    function downloadImage(event) {
        window.open(dataImage);
    }
    
});