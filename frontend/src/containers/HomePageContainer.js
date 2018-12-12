import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  editWorkoutAction,
  loadWorkoutsAction,
  saveNewWorkoutAction
} from '../actions/workouts'
import {
  loadHomePageAction,
} from '..'
import {
  onStartDateChangeAction,
  onEndDateChangeAction,
} from '../actions/common'
import {
  getActiveChart,
  getEndDate,
  getStartDate,
  getWorkoutAPIError,
} from '../reducers/index'
import HomePage from '../app/common/ui/HomePage'
import { getWorkoutsByDateRange, getWorkoutsPerMonth, getWorkoutTypes } from '../helpers/reselect/homePageSelectors'


class HomePageContainer extends Component {
  componentWillMount() {
    this.props.loadHomePage()
  }

  render() {
    return <HomePage {...this.props} />
  }
}

HomePageContainer.propTypes = {
  endDate: PropTypes.object.isRequired,
  loadWorkouts: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  activeChart: getActiveChart(state),
  endDate: getEndDate(state),
  errors: getWorkoutAPIError(state),
  startDate: getStartDate(state),
  workouts: getWorkoutsByDateRange(state),
  workoutsPerMonth: getWorkoutsPerMonth(state),
  workoutTypes: getWorkoutTypes(state)
})

export default withRouter(connect(mapStateToProps, {
  editWorkout: editWorkoutAction,
  loadHomePageAction: loadHomePageAction,
  onStartDateChange: onStartDateChangeAction,
  onEndDateChange: onEndDateChangeAction,
  saveNewWorkout: saveNewWorkoutAction,
})(HomePageContainer))
