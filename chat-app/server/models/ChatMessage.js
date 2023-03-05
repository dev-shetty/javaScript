import mongoose from "mongoose"
import { v4 as uuidv4 } from "uuid"

const MESSAGE_TYPES = {
  TYPE_TEXT: "text",
}

const readByRecipientSchema = new mongoose.Schema(
  {
    _id: false,
    readByUserId: String,
    readAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: false,
  }
)

const chatMessageSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    chatRoomId: String,
    message: mongoose.Schema.Types.Mixed,
    type: {
      type: String,
      default: () => MESSAGE_TYPES.TYPE_TEXT,
    },
    postedByUser: String,
    readByRecipients: [readByRecipientSchema],
  },
  {
    timestamps: true,
    collection: "chatmessages",
  }
)

chatMessageSchema.static.createPostInChatRoom = async function (
  chatRoomId,
  message,
  postedByUser
) {
  try {
    const post = await this.create({
      chatRoomId,
      message,
      postedByUser,
      readByRecipients: { readByUserId: postedByUser },
    })

    const aggregate = await this.aggregate([
      // Find the post for given id
      { $match: { _id: post._id } },
      // join another table called users, and get user whose _id is postedByUser
      {
        $lookup: {
          from: "users",
          localField: "postedByUser",
          foreignField: "_id",
          as: "postedByUser",
        },
      },
      { $unwind: "$postedByUser" },
      // join another table called chatrooms, and get chatroom whose _id is chatRoomId
      {
        $lookup: {
          from: "chatrooms",
          localField: "chatRoomId",
          foreignField: "_id",
          as: "chatRoomInfo",
        },
      },
      { $unwind: "$chatRoomInfo" },
      { $unwind: "$chatRoomInfo.userIds" },
      // join another table called users, and get user whose _id is userIds
      {
        $lookup: {
          from: "users",
          localField: "chatRoomInfo.userIds",
          foreignField: "_id",
          as: "chatRoomInfo.userProfile",
        },
      },
      { $unwind: "$chatRoomInfo.userProfile" },

      //   Group the data
      {
        $group: {
          _id: "$chatRoomInfo._id",
          postId: { $last: "$_id" },
          chatRoomId: { $last: "$chatRoomInfo._id" },
          message: { $last: "$message" },
          type: { $last: "$type" },
          postedByUser: { $last: "$postedByUser" },
          readByRecipients: { $last: "$readByRecipients" },
          chatRoomInfo: { $addToSet: "$chatRoomInfo.userProfile" },
          createdAt: { $last: "$createdAt" },
          updatedAt: { $last: "$updatedAt" },
        },
      },
    ])
    return aggregate[0]
  } catch (error) {
    throw error
  }
}

export default mongoose.model("ChatMessage", chatMessageSchema)
