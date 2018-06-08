import React, { Component } from 'react';
import { values } from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'
import {
  editWorkoutAction,
  loadWorkoutsAction,
  saveNewWorkoutAction
} from '../actions/workouts'
import {
  getNewWorkout,
  getUsersSchema,
  getWorkoutAPIError,
  getWorkoutsSchema,
} from '../reducers'
import WorkoutForm from '../components/WorkoutForm'
import { WORKOUT_TYPES, WORKOUT_INTENSITY } from '../static/workouts'

class HomePageContainer extends Component {
  componentWillMount() {
    const { loadWorkouts } = this.props
    loadWorkouts()
  }
  render() {
    return (
      <div className="workout">
        <h3> Home Page </h3>
        <WorkoutForm {...this.props}/>
      </div>
    )
  }
}

const getWorkoutsFromSchema = createSelector(
  getWorkoutsSchema,
  workouts => !workouts ? [] : values(workouts)
)

const getUsersFromSchema = createSelector(
  getUsersSchema,
  users => !users ? [] : values(users)
)

const mapStateToProps = (state) => ({
  users: getUsersFromSchema(state),
  workouts: getWorkoutsFromSchema(state),
  errors: getWorkoutAPIError(state),
  newWorkout: getNewWorkout(state),
  workoutTypes: WORKOUT_TYPES,
  workoutIntensity: WORKOUT_INTENSITY
})

export default withRouter(connect(mapStateToProps, {
  loadWorkouts: loadWorkoutsAction,
  editWorkout: editWorkoutAction,
  saveNewWorkout: saveNewWorkoutAction
})(HomePageContainer))
