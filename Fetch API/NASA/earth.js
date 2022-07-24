// It should work but nothing showing up in console not even error message. So will come back to it later



import { config } from "./config.js";

const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const submit = document.querySelector("#submit");
const dateObj = new Date;

const URL = "https://api.nasa.gov/planetary/earth/imagery";
const api_key = config.apiKey;

// let year = dateObj.getFullYear();
// let month ="0" + (dateObj.getMonth() + 1); // IDK why the month shown is 1 less
// let date = dateObj.getDate();


// let currentDate = year + "-" + month + "-" + date;
let currentDate = "2019-09-12"
// console.log(currentDate);


submit.addEventListener("click", (event) => {
    // console.log(event.offsetX);
    // console.log(latitude.value);
    // console.log(longitude.value);

    let longitudeValue = parseInt(longitude.value);
    let latitudeValue = parseInt(latitude.value);

    // console.log(longitudeValue, latitudeValue);


    // console.log(`${URL}lon=${longitudeValue}&lat=${latitudeValue}&date=${currentDate}&&dim=${dim}&api_key=${api_key}`)
    fetch(`${URL}?lon=${longitudeValue}&lat=${latitudeValue}&date=${currentDate}&api_key=${api_key}`).then(response => {console.log(response);response.json()}).then(data => {
        console.log(data);
    });
    // fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=${api_key}`).then(response => response.json()).then(data => console.log(data))

    // const imageURL = data.


    longitude.value = "";
    latitude.value = "";
});
