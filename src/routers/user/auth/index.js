const AuthRouter = require("express").Router()

AuthRouter.post('/login', require("./auth").login)
AuthRouter.post('/register', require("./auth").register)

module.exports = AuthRouter