const UserRouter = require("express").Router()

UserRouter.use("/auth", require("./auth"))
//UserRouter.use("/data", require("./data"))

module.exports = UserRouter