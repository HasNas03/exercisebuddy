import { useEffect } from "react"
import WorkoutDetails from '../components/WorkoutDetails'
import Form from "../components/Form"
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"

function Home(){
    const {workouts, dispatch} = useWorkoutsContext()
    // fetch workouts via api from backend 

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts()
    }, [dispatch])
    
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => ( // only map to list (present) if workouts exist
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <Form />
        </div>
    )
}

export default Home