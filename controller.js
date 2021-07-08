const User = require('./db')

const createUser = async (req, res) => {
    const user = req.body
    const newUser = new User(user)
    try {
        const new_user = await newUser.save()

        res.status(201).send(new_user)
        
    } catch(error) {
        res.status(400).send({'message': error.message})
    }
    
}

module.exports = {
    createUser
}