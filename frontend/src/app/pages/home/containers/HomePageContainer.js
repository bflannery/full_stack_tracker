import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  loadHomePageAction,
  onStartDateChangeAction,
  onEndDateChangeAction,
} from '../modules/actions'
import {
  getActiveChart,
  getEndDate,
  getStartDate,
  // getWorkoutAPIError,
} from '../modules/selectors'
import HomePage from '../components/HomePage'
import { getWorkoutsByDateRange, getWorkoutsPerMonth, getWorkoutTypes } from '../modules/utilities'


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
  loadHomePage: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  activeChart: getActiveChart(state),
  endDate: getEndDate(state),
  // errors: getWorkoutAPIError(state),
  startDate: getStartDate(state),
  workouts: getWorkoutsByDateRange(state),
  workoutsPerMonth: getWorkoutsPerMonth(state),
  workoutTypes: getWorkoutTypes(state)
})

export default withRouter(connect(mapStateToProps, {
  loadHomePage: loadHomePageAction,
  onStartDateChange: onStartDateChangeAction,
  onEndDateChange: onEndDateChangeAction,
})(HomePageContainer))
