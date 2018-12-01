import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'


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
          label: 'Workouts Per Month',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: _.map(workoutsPerMonth, 'totalCalsBurned'),
        }
      ]
    }
    return (
      <Bar
        data={data}
        width={100}
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

export default WorkoutsPerMonthChart
