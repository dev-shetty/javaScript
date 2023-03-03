import express from "express"
import { loginUser } from "../controllers/auth.js"
import { encode } from "../middlewares/jwt.js"

const router = express.Router()
router.post("/login/:userId", encode, loginUser)

export default router
