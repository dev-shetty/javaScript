interface User {
  readonly dbId: number
  email: string
  userId: number
  googleId?: string
  //   startTrial: () => string
  // Another way
  startTrial(): string
  getCoupon(couponName: string, value: number): string
}

// Reopening of the interface or adding more values to interface
interface User {
  githubToken: string
}

// interface Another {}

// To extend from more than 1 interface
// interface Admin extends User, Another {
//   role: "admin" | "ta" | "learner"
// }

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const dev: User = {
  dbId: 123,
  email: "dev@dev.com",
  userId: 45,
  githubToken: "github",
  startTrial: () => {
    return "Trial Started"
  },
  //   no need to match the parameter names
  getCoupon: (name: "Deveesh", off: 10) => {
    return `${name}${off}`
  },
}

const devAdmin: Admin = {
  role: "admin",
  dbId: 123,
  email: "dev@dev.com",
  userId: 45,
  githubToken: "github",
  startTrial: () => {
    return "Trial Started"
  },
  //   no need to match the parameter names
  getCoupon: (name: "Deveesh", off: 10) => {
    return `${name}${off}`
  },
}

export {}
