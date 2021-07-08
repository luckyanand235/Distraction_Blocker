const {createUser} = require('./controller')

const { Router } = require('express')

const route = Router()

route.get('/', createUser)

module.exports = {
    userRoute: route
}