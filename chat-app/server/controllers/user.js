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
    const user = await User.create({ firstName, lastName, type })
    if (!user) {
      throw {
        error:
          "There was an error creating the user, check the details correctly",
      }
    }
    return res.status(200).json({ success: true, user })
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
}
export async function onGetAllUsers(req, res) {
  try {
    const users = await User.find()
    if (!users) {
      throw { error: "No Users Found" }
    }
    return res.status(200).json({ success: true, users })
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
}
export async function onGetUserById(req, res) {
  try {
    const { id } = req.params
    const user = await User.findOne({ _id: id })
    if (!user) {
      throw { error: `No user with ID: ${id} is found` }
    }
    return res.status(200).json({ success: true, user })
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
}
export async function onDeleteUserById(req, res) {
  try {
    const { id } = req.params
    const deletedUser = await User.deleteOne({ _id: id })
    if (!deletedUser) {
      throw { error: `User with ID ${id} doesn't exist` }
    }
    return res.status(200).json({
      sucess: true,
      message: `Deleted a count of ${deletedUser.deletedCount} user(s)`,
    })
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
}
