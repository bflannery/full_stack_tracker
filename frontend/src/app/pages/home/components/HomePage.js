import React from 'react'
import DatePicker from 'react-datepicker'
import { Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import CaloriesPerWorkoutChart from './CaloriesPerWorkoutChart'
import WorkoutsPerMonth from './WorkoutsPerMonthChart'
import WorkoutTypesChart from './WorkoutTypesChart'
import WorkoutTimeChart from './WorkoutTimeChart'
import DashboardChart from './DashboardChart'

const HomePage = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  activeChart,
}) => (
  <div>
    <Row xs={12}>
      <Col xs={12} sm={2}>
        <h5> Start Date </h5>
        <DatePicker
          selectsStart
          startDate={startDate}
          endDate={endDate}
          selected={startDate}
          onChange={onStartDateChange}
          dropdownMode={'scroll'}
        />
      </Col>
      <Col xs={12} sm={2}>
        <h5> End Date </h5>
        <DatePicker
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          selected={endDate}
          onChange={onEndDateChange}
          dropdownMode={'scroll'}
        />
      </Col>
    </Row>
    {activeChart === 'dashboard' && <DashboardChart /> }
    {activeChart === 'workoutCals' && <CaloriesPerWorkoutChart /> }
    {activeChart === 'workoutTime' && <WorkoutsPerMonth /> }
    {activeChart === 'workoutMonth' && <WorkoutTypesChart /> }
    {activeChart === 'workoutTypes' && <WorkoutTimeChart /> }
  </div>
)

HomePage.propTypes = {
  activeChart: PropTypes.string.isRequired,
  endDate: PropTypes.object.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
}

export default HomePage
