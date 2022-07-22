// Ternar Operator
function checkEqual(a, b) {
    return a === b ? true : false;
    // return a === b <-- same as return a === b ? true : false;
}
console.log(checkEqual(1, 5));


// Nesting ternary operator
function checkSign(num) {
    return num > 0 ? "positive" : num === 0 ? "zero" : "negative";
}
console.log(checkSign(-98));