import makeValidation from "@withvoid/make-validation"
import User, { USER_TYPES } from "../models/User.js"

export async function onCreateUser(req, res) {
  try {
    const validation = makeValidation((types) => ({
      payload: req.body,
      checks: {
        firstName: { type: types.string },
        lastName: { type: types.string },
        type: { type: types.enum, options: { enum: USER_TYPES } },
      },
    }))
    if (!validation.success) {
      return res.status(400).json(validation)
    }
    const { firstName, lastName, type } = req.body
    const user = await User.createUser(firstName, lastName, type)
    return res.status(200).json({ success: true, user })
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
}
export async function onGetAllUsers(req, res) {}
export async function onGetUserById(req, res) {}
export async function onDeleteUserById(req, res) {}
