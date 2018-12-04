import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import CaloriesPerWorkoutChart from '../workouts/CaloriesPerWorkoutChart'
import WorkoutsPerMonth from '../workouts/WorkoutsPerMonth'
import WorkoutTypesChart from '../workouts/WorkoutTypesChart'
import DatePicker from 'react-datepicker'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.handleSwitchTab = this.handleSwitchTab.bind(this)
    this.state = {
      activeTab: '1'
    }
  }

  handleSwitchTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  componentWillMount() {
    const { loadWorkouts } = this.props
    loadWorkouts()
  }

  render() {
    const { startDate, endDate, onStartDateChange, onEndDateChange } = this.props
    const { activeTab } = this.state
    return (
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
        <Nav tabs style={{ marginTop: '1rem' }}>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { this.handleSwitchTab('1') }}
            >
              Calories Per Workout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { this.handleSwitchTab('2') }}
            >
              Workouts Per Month
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { this.handleSwitchTab('3') }}
            >
              Types of Workouts
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <CaloriesPerWorkoutChart {...this.props} />
          </TabPane>
          <TabPane tabId="2">
            <WorkoutsPerMonth {...this.props} />
          </TabPane>
          <TabPane tabId="3">
            <WorkoutTypesChart {...this.props} />
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

HomePage.propTypes = {
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  loadWorkouts: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
}

export default HomePage
