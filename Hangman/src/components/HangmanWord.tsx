type hangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: hangmanWordProps) {
  return (
    <div className="guessed-letters">
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: "0.1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
