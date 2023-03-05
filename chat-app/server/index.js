import http from "http"
import express from "express"
import logger from "morgan"
import dotenv from "dotenv"
import cors from "cors"
import { Server } from "socket.io"

import "./config/mongo.js"
import WebSockets from "./utils/WebSockets.js"
import indexRouter from "./routes/index.js"
import userRouter from "./routes/user.js"
import chatRoomRouter from "./routes/chatRoom.js"
import deleteRouter from "./routes/delete.js"

import { decode } from "./middlewares/jwt.js"

dotenv.config()
const app = express()
const port = process.env.PORT || 5000
app.set(port)

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", indexRouter)
app.use("/users", userRouter)
app.use("/room", decode, chatRoomRouter)
app.use("/delete", deleteRouter)

// for 404 (route not found)
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "You lost your way...endpoint doesn't exist",
  })
})

const server = http.createServer(app)
global.io = new Server(server)
global.io.on("connection", WebSockets.connection)
server.listen(port)
server.on("listening", () => {
  console.log(`Listening on port :: http://localhost:${port}`)
})
