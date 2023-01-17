"use strict";
exports.__esModule = true;
// : after () is type of return (return-type)
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// Adding default value (isPaid paramter)
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var value = addTwo(5);
getUpper("Hello");
signUpUser("Deveesh", "something@something.com", true);
loginUser("D", "d@d.com");
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "superman", "spiderman", "ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
