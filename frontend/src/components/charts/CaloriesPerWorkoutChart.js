import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadWorkoutsAction } from '../../actions/workouts'
import {
  onStartDateChangeAction,
  onEndDateChangeAction,
} from '../../actions/common'
import {
  getWorkoutAPIError,
  getStartDate,
  getEndDate,
} from '../../reducers'
import { getWorkoutsByDateRange } from '../../helpers/reselect/homePageSelectors'

class CaloriesPerWorkoutChart extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const dataLabels = _.map(this.props.workouts, workout => workout.creationDate)
    const dataValues = _.map(this.props.workouts, workout => workout.totalEnergyBurned)
    const data = {
      labels: dataLabels,
      datasets: [
        {
          label: 'Calories Burned Per Workout',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataValues
        }
      ]
    }
    return <Line data={data} />
  }
}

CaloriesPerWorkoutChart.propTypes = {
  workouts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  endDate: getEndDate(state),
  errors: getWorkoutAPIError(state),
  startDate: getStartDate(state),
  workouts: getWorkoutsByDateRange(state),
})

export default withRouter(connect(mapStateToProps, {
  loadWorkouts: loadWorkoutsAction,
  onStartDateChange: onStartDateChangeAction,
  onEndDateChange: onEndDateChangeAction,
})(CaloriesPerWorkoutChart))
