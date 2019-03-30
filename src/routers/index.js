const AppRouter = require("express").Router()
const userRoutes = require('./user')
const entryRoutes = require('./entry')

AppRouter.use("/users", userRoutes)
AppRouter.use("/entries", entryRoutes)

module.exports =  AppRouter