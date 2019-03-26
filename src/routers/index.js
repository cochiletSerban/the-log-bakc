const AppRouter = require("express").Router()
const userRoutes = require('./user')

AppRouter.use("/user", userRoutes)

module.exports =  AppRouter