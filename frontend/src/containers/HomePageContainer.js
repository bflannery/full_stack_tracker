import React, { Component } from 'react';
import { values } from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'
import { apiGetUsers } from '../actions/users'
import {
  apiGetWorkouts,
  editWorkoutAction,
  saveNewWorkoutAction
} from '../actions/workouts'
import {
  getWorkoutAPIError,
  getWorkoutsSchema,
  getUsersSchema
} from '../reducers'
import WorkoutForm from '../components/WorkoutForm'

class HomePageContainer extends Component {
  componentWillMount() {
    this.props.getUsers()
    this.props.getWorkouts()
}
  render() {
    return (
      <div className="workout">
        <h3> Home Page </h3>
        <WorkoutForm {...this.props}/>
      </div>
    );
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
  users: !getUsersFromSchema(state) ? [] : getUsersFromSchema(state),
  workouts: !getWorkoutsFromSchema(state) ? [] : getUsersFromSchema(state),
  errors: getWorkoutAPIError(state),
})
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(apiGetUsers()),
  getWorkouts: () => dispatch(apiGetWorkouts()),
  editWorkout: (workoutChanges) => dispatch(editWorkoutAction(workoutChanges)),
  saveNewWorkout: () => dispatch(saveNewWorkoutAction())
})
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer));
