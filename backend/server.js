require('dotenv').config() // requiring env file for env variables such as port

// 1. first we need to require the express package
const express = require('express')
// 1. start the express app
const app = express()
// register middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// 2. we also want to react to requests
// set up route handler
app.get("/", (req, res) => {
    res.json({mssg: 'Welcome to the app!'})
})

// 1. listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port: ", process.env.PORT) // >>> nodemon server.js
})




