import React from 'react'
import PropTypes from 'prop-types'

const Workout = ({
  workout
}) => {
  const {
    duration,
    durationUnit,
    creationDate,
    workoutActivityType,
    totalDistance,
    totalDistanceUnit,
    totalEnergyBurned,
    totalEnergyBurnedUnit
  } = workout
  return (
    <li className="workout-container">
      <ul>
        <li>
          <span> {`Workout Date: ${creationDate}`}</span>
        </li>
        <li>
          <span> {`Workout Type: ${workoutActivityType}`}</span>
        </li>
        <li>
          <span> {`Duration: ${duration} ${durationUnit}`} </span>
        </li>
        <li>
          <span> { `Total Distance: ${totalDistance} ${totalDistanceUnit}`}</span>
        </li>
        <li>
          <span> {`Calories Burned: ${totalEnergyBurned } ${totalEnergyBurnedUnit }`}</span>
        </li>
      </ul>
    </li>
  )
}

Workout.propTypes = {
  workout: PropTypes.shape({
    creationDate: PropTypes.date,
    workoutActivityType: PropTypes.string,
    duration: PropTypes.number,
    durationUnit: PropTypes.string,
    totalDistance: PropTypes.number,
    totalDistanceUnit: PropTypes.string,
    totalEnergyBurned: PropTypes.number,
    totalEnergyUnit: PropTypes.string,
  })
}
export default Workout
