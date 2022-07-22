// Generate random fractions between 0 and 1

function randomFraction() {
    return Math.random();
}

console.log(randomFraction());


// Generate whole numbers
console.log(Math.floor(randomFraction() * 20))
// rounds between any number between 0 and 19 since we multiplied by 20;


// Generate random whole nu(mbers between range
function randomRange(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

console.log(randomRange(50, 70));


// Parse int function <-- to conver to integer
function convertToInteger(str) {
    return parseInt(str);
}
// console.log(convertToInteger("120"))/


// Can be used with radix which specifies the base
function radixConversion(str) {
    return parseInt(str, 2);    // Here 2 means base 2 ie binary 
}