import React from 'react'


const Workout = ({
  workout
}) => (
  <li className="workout-container">
    <ul>
      <li>
        <span> Date: { workout.created_at }</span>
      </li>
      <li>
         <span> Type: { workout.type }</span>
      </li>
      <li>
        <span> Intensity: { workout.intensity }</span>
      </li>
      <li>
        <span> Duration: { workout.duration }</span>
      </li>
      <li>
        <span> Calories Burned: { workout.calories_burned }</span>
      </li>
    </ul>
  </li>
)

export default Workout