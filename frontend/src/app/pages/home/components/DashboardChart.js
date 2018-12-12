import React from 'react'
import { Row, Col } from 'reactstrap'
import CaloriesPerWorkoutChart from './CaloriesPerWorkoutChart'
import WorkoutsPerMonth from './WorkoutsPerMonthChart'
import WorkoutTypesChart from './WorkoutTypesChart'
import WorkoutTimeChart from './WorkoutTimeChart'


const DashboardChart = () => ([
  <Row key={1} style={{ marginTop: '50px'}}>
    <Col xs={6}>
      <CaloriesPerWorkoutChart />
    </Col>
    <Col xs={6}>
      <WorkoutTimeChart />
    </Col>
  </Row>,
  <Row key={2} style={{ marginTop: '50px'}}>
    <Col xs={6}>
      <WorkoutsPerMonth />
    </Col>
    <Col xs={6}>
      <WorkoutTypesChart />
    </Col>
  </Row>
])

export default DashboardChart
