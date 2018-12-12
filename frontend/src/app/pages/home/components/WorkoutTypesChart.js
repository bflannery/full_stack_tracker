import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Polar } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { apiGetWorkouts } from '../../../api/workouts'
import {
  onStartDateChangeAction,
  onEndDateChangeAction,
} from '../modules/actions'
import {
  // getWorkoutAPIError,
  getStartDate,
  getEndDate,
} from '../modules/selectors'
import { getWorkoutTypes } from '../modules/utilities'

class WorkoutTypesChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { workoutTypes = [] } = this.props
    const data = {
      datasets: [{
        data: _.map(workoutTypes, type => type.workouts.length),
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB'
        ],
      }],
      labels: _.map(workoutTypes, 'label')
    }

    return <Polar data={data} />
  }
}

WorkoutTypesChart.propTypes = {
  workoutTypes: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  endDate: getEndDate(state),
  // errors: getWorkoutAPIError(state),
  startDate: getStartDate(state),
  workoutTypes: getWorkoutTypes(state),
})

export default withRouter(connect(mapStateToProps, {
  loadWorkouts: apiGetWorkouts,
  onStartDateChange: onStartDateChangeAction,
  onEndDateChange: onEndDateChangeAction,
})(WorkoutTypesChart))
