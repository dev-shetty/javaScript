export async function loginUser(req, res, next) {
  return res.status(200).json({
    success: true,
    authorization: req.authToken,
  })
}
