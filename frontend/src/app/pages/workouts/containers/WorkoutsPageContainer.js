import React, { Component } from 'react'
import { connect } from 'react-redux'
import { values } from 'lodash'
import { createSelector } from 'reselect'
import { getWorkoutsSchema } from '../../../schema/workouts/modules/selectors'
import WorkoutsList from '../components/WorkoutList'

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
  workouts => !workouts ? [] : values(workouts)
)

const mapStateToProps = (state) => ({
  workouts: getWorkoutsFromSchema(state)
})

export default connect(
  mapStateToProps,
)(WorkoutsPageContainer)
