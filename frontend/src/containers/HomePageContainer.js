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
import WorkoutsPerMonth from '../components/workouts/WorkoutsPerMonth'
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
        <WorkoutsPerMonth {...this.props} />
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
    return _.map(filteredWorkouts, workout => ({
      ...workout,
      creationDate: moment(workout.creationDate).format('MM-DD-YYYY')
    }))
  }
)
const formatWorkoutMonth = workout => moment(workout.creationDate).format('MMMM')

const getFilteredWorkoutsPerMonth = (workouts, month) => (
  _.filter(workouts, workout => _.isEqual(formatWorkoutMonth(workout), month))
)

const getTotalCalsBurnedPerMonth = (workouts, month) => {
  const workoutsPerMonth = getFilteredWorkoutsPerMonth(workouts, month)
  return _.reduce(workoutsPerMonth, (curr, next) => (curr + next.totalEnergyBurned), 0)
}

const getWorkoutsPerMonth = createSelector(
  getWorkoutsByDateRange,
  (workouts) => {
    const months = _.uniq(_.map(workouts, workout => formatWorkoutMonth(workout)))
    return _.map(months, month => ({
      label: month,
      totalWorkouts: getFilteredWorkoutsPerMonth(workouts, month),
      totalCalsBurned: getTotalCalsBurnedPerMonth(workouts, month)
    }))
  }
)

const mapStateToProps = (state) => ({
  workouts: getWorkoutsByDateRange(state),
  workoutsPerMonth: getWorkoutsPerMonth(state),
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
