import mongoose from "mongoose"
import config from "./index.js"

const CONNECTION_URL = `mongodb://${config.db.url}/${config.db.name}`

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
})

mongoose.connection.on("connected", () => {
  console.log("MongoDB has connected successfully")
})

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB has reconnected")
})

mongoose.connection.on("error", (error) => {
  console.log("MongoDB connection has an error", error)
  mongoose.disconnect()
})

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection is disconnected")
})
