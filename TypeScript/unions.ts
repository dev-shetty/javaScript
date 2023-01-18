let score: number | string = 33
score = 44
score = "Homerun"

type User = {
  name: string
  id: Number
}

type Admin = {
  username: string
  id: Number
}

let deveesh: User | Admin = {
  name: "Deveesh",
  id: 123,
}

deveesh = {
  username: "dev",
  id: 123,
}

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase()
    return
  }
  id + 2
}
getDbId(5)

export {}

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
// This can be either all strings or all numbers but can't be both
const data3: string[] | number[] = []

// to mix both types
const data4: (string | number)[] = ["1", 2, 3, "4"]

// Literal assignment can assign anyother value
let pi: 3.14

// To pick from specific values
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "window"
// seatAllotment = "crew" // can't assign
