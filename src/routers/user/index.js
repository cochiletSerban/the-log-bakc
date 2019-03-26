const auth = require("./auth")
const UserRouter = require("express").Router()

UserRouter.use("/auth", auth)
//UserRouter.use("/data", require("./data"))
module.exports = UserRouter