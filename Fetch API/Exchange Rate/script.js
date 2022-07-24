import { config } from "./config.js";

const mainDiv = document.querySelector("section");
const currencyOne = document.querySelector("#first-currency");
const currencyTwo = document.querySelector("#second-currency");
const calcButton = document.getElementById("calculate");
const resultH2 = document.querySelector(".conversion-result")

const api_key = config.apiKey;
const URL = "https://v6.exchangerate-api.com/v6/";
const request = "pair";

calcButton.addEventListener("click", (event) => {

    resultH2.innerHTML = "";

    console.log(currencyOne.value);
    console.log(currencyTwo.value);

    fetch(`${URL}${api_key}/${request}/${currencyOne.value}/${currencyTwo.value}`).then(response => response.json()).then(data => {
        console.log(data);
        console.log(data.conversion_rate);

        const conversionRate = data.conversion_rate;
        console.log(conversionRate);

        const conversionText = `1 ${currencyOne.value} = ${conversionRate} ${currencyTwo.value}`;

        resultH2.append(conversionText);
    });
    mainDiv.style.height = "45%";

});

