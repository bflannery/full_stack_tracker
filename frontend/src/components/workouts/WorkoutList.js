import React from 'react'
import Workout from './Workout'

const WorkoutsList = ({
  workouts
}) =>(
  <ul className="workout-list-container">
    {workouts.map(workout =>
      <Workout
        key={workout.id.toString()}
        workout={workout}
      />
    )}
  </ul>
)

export default WorkoutsList