const user: (string | number)[] = [1, "ds"]

// Tuple - to get types in order
let userTuple: [string, number, boolean]
userTuple = ["hc", 131, true]

let rgb: [number, number, number]
rgb = [255, 255, 255]

type Rgba = [number, number, number, number?]
let rgba: Rgba = [0, 0, 0]

type User = [number, string]
const newUser: User = [112, "example@example.com"]

// Drawbacks
newUser[1] = "example.com"
// newUser.push(true) // and all other array methods... fixed now by devs as it gives error

export {}
