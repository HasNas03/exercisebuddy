const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workout)
}

// get a workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    // check if object id being used is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout entry'})
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({error: 'No such workout entry'})
    }
    res.status(200).json(workout)
}

// create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    // add doc to db
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)} 
    catch (error){
        res.status(400).json({error: error.message})}
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    // check if object id being used is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout entry'})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if (!workout) {
        return res.status(404).json({error: 'No such workout entry'})
    }
    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    // check if object id being used is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout entry'})
    }
    // create update object (?)
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    // check if it was successful
    if (!workout) {
        return res.status(404).json({error: 'No such workout entry'})
    }
    res.status(200).json(workout)

}


// export functions
module.exports = {
    getWorkouts,
    getWorkout,
    deleteWorkout,
    createWorkout,
    updateWorkout
}