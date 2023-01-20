function detectTypes(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase()
  }
  return val + 3
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID")
    return
  }
  id.toLowerCase()
}

// Doing the same thing using "in" operator

interface User {
  name: string
  email: string
}

interface Admin {
  name: string
  email: string
  isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin
  }
}

// instanceOf works for date because an instance can be created using new keyword
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toLowerCase())
  }
}

// Type Predicates

type Fish = {
  swim: () => void
}
type Bird = {
  fly: () => void
}

// Some kind of typecasting to avoid boolean and returning a type
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet // fish
    return "fish food"
  } else {
    pet // bird
    return "bird food"
  }
}

// Discriminated Unions
// To have a common property which can be checked
interface Circle {
  kind: "circle"
  radius: number
}

interface Square {
  kind: "square"
  side: number
}

interface Rectangle {
  kind: "rectangle"
  length: number
  width: number
}

type Shape = Circle | Square
function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2
  }
  return shape.side ** 2
}

// Exhaustiveness checking
type Shape2 = Circle | Square | Rectangle

function getArea(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.side ** 2
    case "rectangle":
      return shape.length * shape.width

    //   default case for future safety
    default:
      const _defaultShape: never = shape
      return _defaultShape
  }
}
