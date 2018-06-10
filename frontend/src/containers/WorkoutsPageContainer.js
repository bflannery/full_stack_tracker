import React, { Component } from 'react'
import { connect } from 'react-redux'
import { values } from 'lodash'
import { createSelector } from 'reselect'
import { getWorkoutsSchema } from '../reducers/index'
import { convertSecondsToMinutes, formatDateTime } from '../helpers/utils/time'
import WorkoutsList from '../components/workouts/WorkoutList'

class WorkoutsPageContainer extends Component {
  render() {
    return (
      <div className="workout-page-container">
        <h3> Workouts Page </h3>
        <WorkoutsList {...this.props} />
      </div>
    );
  }
}

const getWorkoutsFromSchema = createSelector(
  getWorkoutsSchema,
  workouts => !workouts ? [] : values(workouts).map(workout => ({
    ...workout,
    created_at: formatDateTime(workout.created_at),
    duration: convertSecondsToMinutes(workout.duration)
  }))
)

const mapStateToProps = (state) => ({
  workouts: getWorkoutsFromSchema(state)
})
const mapDispatchToProps = (dispatch) => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutsPageContainer);
