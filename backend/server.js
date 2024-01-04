require('dotenv').config() // requiring env file for env variables such as port

// 1. first we need to require the express package
const express = require('express')

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

// 1. listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port: ", process.env.PORT) // >>> nodemon server.js
})




