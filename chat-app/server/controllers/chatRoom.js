import makeValidation from "@withvoid/make-validation"
import ChatMessage from "../models/ChatMessage.js"
import ChatRoom, { CHAT_ROOM_TYPES } from "../models/ChatRoom.js"

export async function initiate(req, res) {
  try {
    const validation = makeValidation((types) => ({
      payload: req.body,
      checks: {
        userIds: {
          type: types.array,
          options: { unique: true, empty: false, stringOnly: true },
        },
        type: { type: types.enum, options: { enum: CHAT_ROOM_TYPES } },
      },
    }))
    if (!validation.success) {
      return res.status(400).json({ ...validation })
    }

    const { userIds, type } = req.body
    const { userId: chatInitiator } = req
    const allUserIds = [...userIds, chatInitiator]
    const chatRoom = await ChatRoom.initiateChat(
      allUserIds,
      type,
      chatInitiator
    )
    return res.status(200).json({ success: true, chatRoom })
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
}

export async function postMessage(req, res) {
  try {
    const { roomId } = req.params
    const validation = makeValidation((types) => ({
      payload: req.body,
      checks: {
        messageText: { type: types.string },
      },
    }))
    if (!validation.success) return res.status(400).json({ ...validation })
    const messagePayload = {
      messageText: req.body.messageText,
    }

    const currentLoggedUser = req.userId
    const post = await ChatMessage.createPostInChatRoom(
      roomId,
      messagePayload,
      currentLoggedUser
    )
    console.log("Hello")
    global.io.sockets.in(roomId).emit("new message", { message: post })
    return res.status(200).json({ success: true, post })
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
}
export async function getRecentConversation(req, res) {}
export async function getConversationByRoomId(req, res) {}
export async function markConversationReadByRoomId(req, res) {}
