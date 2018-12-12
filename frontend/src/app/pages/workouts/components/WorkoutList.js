import React from 'react'
import PropTypes from 'prop-types'
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

WorkoutsList.propTypes = {
  workouts: PropTypes.array.isRequired,
}

export default WorkoutsList