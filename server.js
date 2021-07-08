const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const { userRoute } = require('./routes')

const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/user', userRoute)

const DB_URL = process.env.MONGO_DB_URL
const PORT = process.env.PORT

mongoose.connect(DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        app.listen(PORT, () => console.log(`Server is started at http://localhost:${PORT}`))
    }).catch((error) => {
        console.log(error)
    })