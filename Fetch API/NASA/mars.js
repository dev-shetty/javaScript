import { config } from "./config.js";

const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=";
const api_key = config.apiKey;

const title = document.getElementById("title");
const parentDiv = document.getElementById("mars-rover");
// const image = document.getElementById("images");

fetch(`${url}${api_key}`).then(response => response.json()).then(data => {
    console.log(data);

    console.log(data.photos[0]);
    console.log(data.photos[0].rover);

    console.log(data.photos[0].camera.full_name)    // Getting the full name


    for(let i = 0; i < 12; i++) {
        var name = data.photos[i].camera.full_name;   // Getting the full name
        var image = data.photos[i].img_src;
        var photoDate = data.photos[i].earth_date;
        var roverName = data.photos[i].rover.name;
        var roverStatus = data.photos[i].rover.status;
        // console.log(photoDate);
        // console.log(image);

        const mainDiv = document.createElement("div");
        mainDiv.className = "container"
        const h1 = document.createElement("h1");    
        const img = document.createElement("img");
        const date = document.createElement("h2");
        const roverInfo = document.createElement("div");
        roverInfo.id = "rover-info";

        const roverNameEle = document.createElement("h3");
        const roverStatusEle = document.createElement("h3");
        date.style.opacity = 0.5;
        roverInfo.style.marginBottom = "10px"
        mainDiv.style.border = "2px solid"
        mainDiv.style.padding = "5px"

        img.setAttribute("src", image);
        h1.append(name);
        roverNameEle.append("Rover Name: " + roverName);
        roverStatusEle.append("Rover Status: " + roverStatus);
        date.append("Photo was taken on: " + photoDate);


        mainDiv.append(h1);
        mainDiv.append(date);
        roverInfo.append(roverNameEle);
        roverInfo.append(roverStatusEle);
        mainDiv.append(roverInfo);
        mainDiv.append(img);


        mainDiv.style.display = "block";
        parentDiv.append(mainDiv);
    }
});