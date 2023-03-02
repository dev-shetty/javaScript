import Card from "./Card"

const emotes = [
  "😀",
  "😄",
  "😁",
  "😍",
  "😇",
  "🥸",
  "😎",
  "💀",
  "😶‍🌫️",
  "🤠",
  "🥳",
]

function CardPopup() {
  return (
    <div className="min-h-screen bg-purple-400 flex flex-col items-center gap-8 py-8">
      {emotes.map((emote, index) => (
        <Card emote={emote} key={index} />
      ))}
    </div>
  )
}

export default CardPopup
