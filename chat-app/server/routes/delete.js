import express from "express"
import { deleteRoomById, deleteMessageById } from "../controllers/delete.js"

const router = express.Router()

router
  .delete("/room/:roomId", deleteRoomById)
  .delete("/message/:messageId", deleteMessageById)

export default router
