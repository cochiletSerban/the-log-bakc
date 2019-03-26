const User = require('../../../models/user')

let register = async (req, res, next) => {
    
    const user = new User(req.body)
    // needed to add validation
    try {
        dbuser = await User.findOne( {email:user.email} ) //check if user exists in db 
        if (dbuser) { 
            let err = new Error('this is user is already registered')
            err.statusCode = 400;
            return next(err) // return error to be handled by middleware
        }
        await user.save() // save new user to db
        res.status(201).json('User created succesfully')

    } catch (e) {
        return next(e)
    }
}

let login =  async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send(token)
    } catch (e) {
        res.status(400).send(e)
    }
}

module.exports = {
    register: register,
    login: login
}