import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'
import moment from 'moment'
import {
  editWorkoutAction,
  loadWorkoutsAction,
  saveNewWorkoutAction
} from '../actions/workouts'
import {
  onStartDateChangeAction,
  onEndDateChangeAction,
} from '../actions/common'
import {
  getWorkoutAPIError,
  getWorkoutsSchema,
  getStartDate,
  getEndDate,
} from '../reducers/index'
import WorkoutChart from '../components/workouts/WorkoutChart'
import DatePicker from 'react-datepicker'


class HomePageContainer extends Component {
  componentWillMount() {
    const { loadWorkouts } = this.props
    loadWorkouts()
  }
  render() {
    const { startDate, endDate, onStartDateChange, onEndDateChange } = this.props
    return (
      <div className="home-container">
        <DatePicker
          selected={startDate}
          onChange={onStartDateChange}
        />
        <DatePicker
          selected={endDate}
          onChange={onEndDateChange}
        />
        <WorkoutChart {...this.props}/>
      </div>
    )
  }
}

HomePageContainer.propTypes = {
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  loadWorkouts: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
}


const getAllWorkoutsArray = createSelector(
  getWorkoutsSchema,
  workouts => !workouts ? [] : _.values(workouts)
)

const getWorkoutsByDateRange = createSelector(
  getAllWorkoutsArray,
  getStartDate,
  getEndDate,
  (workouts, startDate, endDate) => {
    const filteredWorkouts = _.filter(workouts, workout => {
      const workoutDate = moment(workout.creationDate)
      return (
        workoutDate.isAfter(startDate) && workoutDate.isBefore(endDate)
        && workout.totalEnergyBurned < 1000
      )
    })
    console.log({filteredWorkouts})
    const formattedWorkouts = _.map(filteredWorkouts, workout => ({
      ...workout,
      creationDate: moment(workout.creationDate).format('MM-DD-YYYY')
    }))
    console.log({formattedWorkouts})
    return formattedWorkouts
  }
)

const mapStateToProps = (state) => ({
  workouts: getWorkoutsByDateRange(state),
  errors: getWorkoutAPIError(state),
  endDate: getEndDate(state),
  startDate: getStartDate(state)
})

export default withRouter(connect(mapStateToProps, {
  loadWorkouts: loadWorkoutsAction,
  editWorkout: editWorkoutAction,
  saveNewWorkout: saveNewWorkoutAction,
  onStartDateChange: onStartDateChangeAction,
  onEndDateChange: onEndDateChangeAction
})(HomePageContainer))
