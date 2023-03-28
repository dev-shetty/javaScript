import mongoose from "mongoose"
import { v4 as uuidv4 } from "uuid"

export const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
}

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
)

userSchema.statics.getUserByIds = async function (ids) {
  try {
    const users = await this.find({ _id: { $in: ids } })
    return users
  } catch (error) {
    throw error
  }
}

export default mongoose.model("User", userSchema)
