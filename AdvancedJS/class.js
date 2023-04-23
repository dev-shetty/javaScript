// Class is syntatical sugar for prototypal inheritance

class Person {
  constructor(fName, lName) {
    this.fName = fName
    this.lName = lName
  }

  sayMyName() {
    return `${this.fName} ${this.lName}`
  }
}

// Inheriting Superhero
class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName)
    this.isSuperHero = true
  }

  fightCrime() {
    console.log("Fighting Crime")
  }
}

const person1 = new Person("Deveesh", "Shetty")
console.log(person1.sayMyName())

const thor = new SuperHero("Thor", "Odinson")
console.log(thor.sayMyName())
