// all workout routes
const express = require('express')
const router = express.Router() // create an instance of the router
const Workout = require('../models/WorkoutModel')
// import controllers
const {
    createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout
} = require('../controllers/workoutController')


// GET all workouts
router.get('/', getWorkouts)
// GET a single workout
router.get('/:id', getWorkout)
// POST a single workout
router.post('/', createWorkout)
// DELETE a single workout
router.delete('/:id', deleteWorkout)
// UPDATE a single workout
router.patch('/:id', updateWorkout)


module.exports = router