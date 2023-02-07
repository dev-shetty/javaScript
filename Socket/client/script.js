import { io } from "socket.io-client"

const joinRoomButton = document.getElementById("room-button")
const messageInput = document.getElementById("message-input")
const roomInput = document.getElementById("room-input")
const form = document.getElementById("form")

// Connect to server
const socket = io("http://localhost:3000")
socket.on("connect", () => {
  displayMessage(`You connected with id: ${socket.id}`)
})

// Can be any custom name and can give any parameters
socket.emit("custom-event", 10, "Hi", { a: 100 })

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const message = messageInput.value
  const room = roomInput.value

  if (message === "") return
  displayMessage(message)
  socket.emit("send-message", message)

  messageInput.value = ""
})

joinRoomButton.addEventListener("click", () => {})
