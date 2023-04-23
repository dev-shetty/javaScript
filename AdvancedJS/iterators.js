// Iterables and Iterators

// Our own iterable
const obj = {
  [Symbol.iterator]: function () {
    let step = 0
    const iterator = {
      next: function () {
        step++
        if (step === 1) {
          return { value: "Hello", done: false }
        } else if (step === 2) {
          return { value: "World", done: false }
        }
        return { value: undefined, done: true }
      },
    }
    return iterator
  },
}

// Iterating our own Iterable
for (const word of obj) {
  console.log(word)
}

// Another Iterator
const myName = "Deveesh"
for (const i of myName) {
  console.log(i)
}
