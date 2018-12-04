import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Polar } from 'react-chartjs-2'

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

export default WorkoutTypesChart
