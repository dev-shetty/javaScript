// SampleArray
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// These array items doesn't alter the old(main) array
// FILTER METHOD - filters the array based on condition
const filterUnder100 = items.filter((item) => {
  return item.price <= 100;
});
// Displays items with price under 100
console.log(filterUnder100);

// MAP METHOD - returns an array of the items we want
const itemNames = items.map((item) => {
  return item.name;
});
// Displays name of all the items
console.log(itemNames);

// FIND METHOD - find single object in an array
const findItem = items.find((item) => {
  return item.name === "Book";
});
// returns the first item which satisfies the condition....
// it can be any condition
console.log(findItem);

// FOREACH method - like a for loop but shorter
// doesn't return anything....and we can perform any operations in it
items.forEach((item) => {
  console.log(item.name);
});

// SOME METHOD - returns true of false
// just checks the array instead of returning values

const hasExpensiveItems = items.some((item) => {
  return item.price <= 100;
});
console.log(hasExpensiveItems); // returns true since atleast one element is less than 100

// EVERY METHOD - returns true or false
// but unlike some it checks all the elements if any one element doesnt satisfy the condition it returns false

const isExpensiveItems = items.every((item) => {
  return item.price >= 100;
});

console.log(isExpensiveItems); // returns false since not all elements are greater than 100

// REDUCE METHOD - does some logic and then returns combination of all the logics
const totalPrice = items.reduce(
  (currentTotal /*The variable which stores the previous iteration*/, item) => {
    return item.price + currentTotal;
  },
  0 /* to tell from where the logic starts here 0th index */
);

console.log(totalPrice); /// Prints the total price

// INCLUDES METHOD
const array = [1, 2, 3, 4, 5];
const includesFour = array.includes(4);
// Checks whether the array includes certain thing or not.

console.log(includesFour); // true since 4 is in array
