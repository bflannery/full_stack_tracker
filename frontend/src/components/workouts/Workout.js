import React from 'react'
import PropTypes from 'prop-types'

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

Workout.propTypes = {
  workout: PropTypes.shape({
    creationDate: PropTypes.string,
    workoutActivityType: PropTypes.string,
    duration: PropTypes.string,
    durationUnit: PropTypes.string,
    totalDistance: PropTypes.string,
    totalDistanceUnit: PropTypes.string,
    totalEnergyBurned: PropTypes.string,
    totalEnergyUnit: PropTypes.string,
  })
}
export default Workout