import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/User.js"

dotenv.config()

const SECRET_KEY = process.env.JWT_SECRET

export async function encode(req, res, next) {
  try {
    const { userId } = req.params
    const user = await User.findOne({ _id: userId })
    if (!user) {
      throw { error: `No user with ID: ${userId} is found` }
    }
    const payload = {
      userId: user._id,
      userType: user.type,
    }
    const authToken = jwt.sign(payload, SECRET_KEY)
    console.log("Auth", authToken)
    req.authToken = authToken
    next()
  } catch (error) {
    return res.status(400).json({ success: false, error: error })
  }
}
export function decode(req, res, next) {
  if (!req.headers.authorization) {
    res
      .status(400)
      .json({ success: false, message: "No access token provided" })
  }
  // Removing the Bearer
  const accessToken = req.headers.authorization.split(" ")[1]
  try {
    const decoded = jwt.verify(accessToken, SECRET_KEY)
    req.userId = decoded.userId
    req.userType = decoded.type
    return next()
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message })
  }
}
