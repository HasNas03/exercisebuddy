// all workout routes
const express = require('express')
const router = express.Router() // create an instance of the router
const Workout = require('../models/WorkoutModel')

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})
// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})
// POST a single workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})
// DELETE a single workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single workout'})
})
// UPDATE a single workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a single workout'})
})


module.exports = router