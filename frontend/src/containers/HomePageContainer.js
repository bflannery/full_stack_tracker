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
  getWorkoutAPIError,
  getWorkoutsSchema,
} from '../reducers/index'
import WorkoutChart from '../components/workouts/WorkoutChart'

class HomePageContainer extends Component {
  componentWillMount() {
    const { loadWorkouts } = this.props
    loadWorkouts()
  }
  render() {
    return (
      <div className="home-container">
        <WorkoutChart {...this.props}/>
      </div>
    )
  }
}

const getWorkoutsFromSchema = createSelector(
  getWorkoutsSchema,
  workouts => !workouts ? [] : values(workouts)
)

const mapStateToProps = (state) => ({
  workouts: getWorkoutsFromSchema(state),
  errors: getWorkoutAPIError(state),
})

export default withRouter(connect(mapStateToProps, {
  loadWorkouts: loadWorkoutsAction,
  editWorkout: editWorkoutAction,
  saveNewWorkout: saveNewWorkoutAction
})(HomePageContainer))
