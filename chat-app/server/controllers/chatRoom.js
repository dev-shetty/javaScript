import makeValidation from "@withvoid/make-validation"
import ChatRoom, { CHAT_ROOM_TYPES } from "../models/ChatRoom"

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
export async function postMessage(req, res) {}
export async function getRecentConversation(req, res) {}
export async function getConversationByRoomId(req, res) {}
export async function markConversationReadByRoomId(req, res) {}
