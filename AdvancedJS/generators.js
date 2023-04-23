function* generatorFunction() {
  yield "Hello"
  yield "World"
}

const generatorObject = generatorFunction()

for (const word of generatorObject) {
  console.log(word)
}
