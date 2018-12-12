import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'
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
import { getWorkoutsPerMonth } from '../modules/utilities'


class WorkoutsPerMonthChart extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { workoutsPerMonth } = this.props
    const data = {
      labels: _.map(workoutsPerMonth, 'label'),
      datasets: [
        {
          label: 'Workouts Per Month!',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: _.map(workoutsPerMonth, month => month.totalWorkouts.length),
        }
      ]
    }
    return (
      <Bar
        data={data}
        width={150}
        height={50}
        options={{
          maintainAspectRatio: true
        }}
      />
    )
  }
}

WorkoutsPerMonthChart.propTypes = {
  workoutsPerMonth: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  endDate: getEndDate(state),
  // errors: getWorkoutAPIError(state),
  startDate: getStartDate(state),
  workoutsPerMonth: getWorkoutsPerMonth(state),
})

export default withRouter(connect(mapStateToProps, {
  loadWorkouts: apiGetWorkouts,
  onStartDateChange: onStartDateChangeAction,
  onEndDateChange: onEndDateChangeAction,
})(WorkoutsPerMonthChart))

