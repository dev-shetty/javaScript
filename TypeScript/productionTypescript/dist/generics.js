"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Generics
// in any a function can take number but written string...but in <Type> the function has to written the type which is given earlier only... if it takes number then it should return number only (useful when there are many types of parameter and u need the same type as return)
function identityThree(val) {
    return val;
}
identityThree(3);
// To make it better and easier to type it can be any letter
function identityFour(val) {
    return val;
}
identityFour({ brand: "", type: 1 });
// Using generics for arrays
function identityArray(val) {
    console.log(val.length);
    return val;
}
function identityArray2(val) {
    return val[3];
}
// Arrow functions
// , in <T, > is used to mention that it is not a jsx syntax but a generic
const getMoreSearchProducts = (val) => {
    return val;
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2,
    };
}
anotherFunction("hello", { connection: "", username: "", password: "" });
// Generic class
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
