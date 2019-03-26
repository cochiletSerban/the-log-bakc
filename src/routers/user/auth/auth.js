const User = require('../../../models/user')

let register = async (req, res) => {
    
    const user = new User(req.body)
    // needed to add validation
    try {
        dbuser = await User.findOne( {email:user.email} ) //check if user exists in db 
        if (dbuser) throw new Error('this is user is already registered')

        await user.save() // save new user to db
        res.status(201).json('User created succesfully')

    } catch (e) {
        res.status(400).json(e.toString())
    }
}

let login =  async (req, res) => {
    try {
        
        const user = await User.findByCredentials(req.body.email, req.body.password)
        console.log(user);
        
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
