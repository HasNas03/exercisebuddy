require('dotenv').config() // requiring env file for env variables such as port

// 1. first we need to require the express package
const express = require('express')

//2. require mongodb
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')
// 1. start the express app
const app = express()
// register middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

// 2. connect to mongodb
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            // 1. listen for requests
            app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port: ", process.env.PORT)})// >>> nodemon server.js
        })
        .catch((error) => {
            console.log(error)
        })






