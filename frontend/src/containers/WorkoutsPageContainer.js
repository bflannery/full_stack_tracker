import React, { Component } from 'react'
import { connect } from 'react-redux'
import { values } from 'lodash'
import { createSelector } from 'reselect'
import { getWorkoutsSchema } from '../reducers/index'
import WorkoutsList from '../components/workouts/WorkoutList'

class WorkoutsPageContainer extends Component {
  render() {
    return (
      <div className="workout-page-container">
        <h3> Workouts Page </h3>
        <WorkoutsList {...this.props} />
      </div>
    )
  }
}

const getWorkoutsFromSchema = createSelector(
  getWorkoutsSchema,
  workouts => !workouts ? [] : values(workouts).map(workout => {
    console.log(workout)
    return workout
  })
)

const mapStateToProps = (state) => ({
  workouts: getWorkoutsFromSchema(state)
})
export default connect(
  mapStateToProps,
)(WorkoutsPageContainer)
