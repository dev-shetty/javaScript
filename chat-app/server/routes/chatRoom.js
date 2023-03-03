import express from "express"
import {
  getRecentConversation,
  getConversationByRoomId,
  initiate,
  postMessage,
  markConversationReadByRoomId,
} from "../controllers/chatRoom.js"

const router = express.Router()

router
  .get("/", getRecentConversation)
  .get("/:roomId", getConversationByRoomId)
  .post("/initiate", initiate)
  .post("/:roomId/message", postMessage)
  .put("/:roomId/mark-read", markConversationReadByRoomId)

export default router
