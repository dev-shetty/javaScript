const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
  return val
}

function identityTwo(val: any): any {
  return val
}

// Generics
// in any a function can take number but written string...but in <Type> the function has to written the type which is given earlier only... if it takes number then it should return number only (useful when there are many types of parameter and u need the same type as return)
function identityThree<Type>(val: Type): Type {
  return val
}

identityThree(3)

// To make it better and easier to type it can be any letter
function identityFour<T>(val: T): T {
  return val
}

interface Bottle {
  brand: string
  type: number
}

identityFour<Bottle>({ brand: "", type: 1 })

// Using generics for arrays
function identityArray<Type>(val: Type[]): Type[] {
  console.log(val.length)
  return val
}

function identityArray2<Type>(val: Type[]): Type {
  return val[3]
}

// Arrow functions
// , in <T, > is used to mention that it is not a jsx syntax but a generic
const getMoreSearchProducts = <T>(val: T[]): T[] => {
  return val
}

interface Database {
  connection: string
  username: string
  password: string
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  }
}

anotherFunction("hello", { connection: "", username: "", password: "" })

interface Quiz {
  name: string
  type: string
}
interface Course {
  name: string
  author: string
  subject: string
}

// Generic class
class Sellable<T> {
  public cart: T[] = []
  addToCart(product: T) {
    this.cart.push(product)
  }
}
