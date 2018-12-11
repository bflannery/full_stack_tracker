import React from 'react'
import { Row, Col } from 'reactstrap'
import CaloriesPerWorkoutChart from '../charts/CaloriesPerWorkoutChart'
import WorkoutsPerMonth from '../charts/WorkoutsPerMonthChart'
import WorkoutTypesChart from '../charts/WorkoutTypesChart'
import WorkoutTimeChart from '../charts/WorkoutTimeChart'


const DashboardChart = () => ([
  <Row key={1} style={{ marginTop: '20px'}}>
    <Col xs={6}>
      <CaloriesPerWorkoutChart />
    </Col>
    <Col xs={6}>
      <WorkoutTimeChart />
    </Col>
  </Row>,
  <Row key={2} style={{ marginTop: '20px'}}>
    <Col xs={6}>
      <WorkoutsPerMonth />
    </Col>
    <Col xs={6}>
      <WorkoutTypesChart />
    </Col>
  </Row>
])

export default DashboardChart
