import React from 'react'


const Workout = ({
  workout
}) => (
  <li className="workout-container">
    <ul>
      <li>
        <span> Date Created: { workout.creationDate }</span>
      </li>
      <li>
        <span> Workout Type: { workout.workoutActivityType }</span>
      </li>
      <li>
         <span> Duration: {workout.duration} {workout.durationUnit} </span>
      </li>
      <li>
        <span> Total Distance: { workout.totalDistance }{ workout.totalDistanceUnit }</span>
      </li>
      <li>
        <span> Calories Burned: { workout.totalEnergyBurned }{ workout.totalEnergyUnit }</span>
      </li>

    </ul>
  </li>
)

export default Workout