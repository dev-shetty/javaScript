function Person(fName, lName) {
  this.firstName = fName
  this.lastName = lName
}

const person1 = new Person("Deveesh", "Shetty")
const person2 = new Person("Bruce", "Banner")

// This gives the getFullName() function to all the objects

// While this gave to only 1 object ie person1
// person1.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

console.log(person1.getFullName())
console.log(person2.getFullName())

function SuperHero(fName, lName) {
  // this = {}
  // Inherting the Person Class
  Person.call(this, fName, lName)
  this.isSuperHero = true
}

SuperHero.prototype.fightCrime = () => {
  console.log("Fighting crime")
}

SuperHero.prototype = Object.create(Person.prototype)

const thor = new SuperHero("Thor", "Odinson")

// Telling that SuperHero is not Person constructor
SuperHero.prototype.constructor = SuperHero
console.log(thor.getFullName())
