import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
}


const getWorkoutsFromSchema = createSelector(
  getWorkoutsSchema,
  workouts => !workouts ? [] : values(workouts)
)

const mapStateToProps = (state) => ({
  workouts: getWorkoutsFromSchema(state),
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
