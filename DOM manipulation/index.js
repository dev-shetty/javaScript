let color = document.getElementById("color");
let submit = document.querySelector("input[type=submit]");
let result = document.querySelector(".result");
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let calculate = document.getElementById("calc");
let textButton = document.querySelector(".textManipulation");
let textString = document.getElementById("text");
let textUtils = document.querySelector(".textUtils") 

submit.addEventListener("click", doSubmit);

function doSubmit(event) {
    event.preventDefault();
    document.body.style.backgroundColor = color.value;
}

calculate.addEventListener("click", calc = event => {
    console.log(firstNumber.value);
    console.log(secondNumber.value);

    // converting string to number
    let sum = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    console.log(sum);
    content = `The sum of ${firstNumber.value} and ${secondNumber.value} is ${sum}`;
    
    // Showing the result in a div
    // sumDiv = document.createElement("h2");
    // sumDiv.appendChild(document.createTextNode(content));
    // result.appendChild(sumDiv);

    result.innerHTML = "<h2>" + content + "</h2>"

    // Making the input box back to null
    firstNumber.value = "";
    secondNumber.value = "";
});

textButton.addEventListener("click", manipulate = event => {

    // Clears the div for the next click
    textUtils.innerHTML = " ";

    let textStringValue = textString.value
    console.log(textStringValue);

    // Converting to uppercase
    let upperText = document.createElement("p");
    upperText.appendChild(document.createTextNode("Uppercase: "+textStringValue.toUpperCase()));
    textUtils.appendChild(upperText);
    console.log(upperText);

    // Converting to lowercase
    let lowerText = document.createElement("p");
    lowerText.appendChild(document.createTextNode("Lowercase: " + textStringValue.toLowerCase()));
    textUtils.appendChild(lowerText);
    console.log(lowerText);
}); 