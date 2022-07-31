// TODO:Make it have various options
// TODO:Add local storage as well

// Getting elements from the DOM
const length = document.getElementById("length");
const lengthDIv = document.querySelector(".length-value");
const splChar = document.getElementById("special-characters");
const numbers = document.getElementById("numbers");
const capLetters = document.getElementById("capital-letters");
const checkBox = document.querySelectorAll("input[type=checkbox]");
const generate = document.getElementById("generate");
const display = document.querySelector(".display");

const resetBtn = document.getElementById("reset");
const saveBtn = document.getElementById("save");
const copyBtn = document.getElementById("copy");

let passwordCount = 0;  // to keep track of password generated

resetBtn.addEventListener("click", reset);

// Resetting everything if needed
function reset() {
    length.value = 8;
    lengthDIv.textContent = length.value;
    capLetters.checked = false;
    splChar.checked = false;
    numbers.checked = false;
    display.textContent = "";
}

saveBtn.addEventListener("click", () => {
    
    if(localStorage.length === 0) {
        passwordCount = 0;
    }
    window.alert(`Saved in your local storage,
    How to Access?
    Ctrl+Shift+I (opens console) --> Application 
    --> Storage --> Local Storage`);
    passwordCount ++;
    password = display.textContent;
    key = "Password " + passwordCount;
    localStorage.setItem(passwordCount, password);
});


copyBtn.addEventListener("click", ()=> {
    let copyText = display.textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(copyText);
    window.alert("Password Copied to Clipboard", 2000)
})


function lengthValue() {
    lengthDIv.textContent = length.value;
}

// Defining the used letters
const UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const SpecialCharacters = ["&", "%", "#", "@", "?"];


// Random number function
function randomNumber(number) {
    return Math.floor(Math.random()*number);
}

generate.addEventListener("click", () => {

    let passwordLength = length.value;
    let isCapLetters = capLetters.checked;
    let isSplChar = splChar.checked;
    let isNumbers = numbers.checked;

    let password = "";

    while (password.length < passwordLength) {
        password += LowerCase[randomNumber(LowerCase.length)];
        if(isNumbers === true && randomNumber(20)%2 === 0) {
            password += Numbers[randomNumber(Numbers.length)];
        }
        if(isCapLetters === true && randomNumber(20)%3 === 0) {
            password += UpperCase[randomNumber(UpperCase.length)];
        }
        if(isSplChar === true && randomNumber(20)%4 === 0) {
            password += SpecialCharacters[randomNumber(SpecialCharacters.length)];
        }
    }
    display.textContent = password;
})