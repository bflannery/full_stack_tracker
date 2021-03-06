import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
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
import { getWorkoutsByDateRange } from '../modules/utilities'

class WorkoutTimeChart extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { workouts } = this.props
    const data = {
      labels: _.map(workouts, w => w.creationDate),
      datasets: [
        {
          label: 'Length of Workout',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,99,132,0.4)',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _.map(_.filter(workouts, w => w.duration < 400), 'duration')
        }
      ]
    }

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: false,
            labelString: 'Moola',
            fontSize: 20
          }
        }]
      }
    }
    return <Line data={data} options={options} />
  }
}

WorkoutTimeChart.propTypes = {
  workouts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  endDate: getEndDate(state),
  // errors: getWorkoutAPIError(state),
  startDate: getStartDate(state),
  workouts: getWorkoutsByDateRange(state),
})

export default withRouter(connect(mapStateToProps, {
  loadWorkouts: apiGetWorkouts,
  onStartDateChange: onStartDateChangeAction,
  onEndDateChange: onEndDateChangeAction,
})(WorkoutTimeChart))


