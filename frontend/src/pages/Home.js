import { useEffect, useState } from "react"
import WorkoutDetails from '../components/WorkoutDetails'

function Home(){
    // fetch workouts via api from backend 

    const[workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])
    
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => ( // only map to list (present) if workouts exist
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
    )
}

export default Home