import express from "express"
import {
  onGetAllUsers,
  onCreateUser,
  onGetUserById,
  onDeleteUserById,
} from "../controllers/user.js"

const router = express.Router()

router
  .get("/", onGetAllUsers)
  .post("/", onCreateUser)
  .get("/:id", onGetUserById)
  .delete("/:id", onDeleteUserById)

export default router
