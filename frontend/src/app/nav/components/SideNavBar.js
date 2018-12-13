import React, { Component } from 'react'
import { Nav, NavItem, Col } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setActiveChartAction } from '../../pages/home/modules/actions'
import { getActiveChart } from  '../../pages/home/modules/selectors'
import { getCurrentRoute } from '../modules/selectors'
import { isAuthenticated } from '../../auth/modules/selectors'

const SIDE_NAV_LINKS = [
  {
    id: 0,
    key: 'dashboard',
    label: 'Dashboard'
  },
  {
    id: 1,
    key: 'workoutCals',
    label: 'Calories Per Month'
  },
  {
    id: 2,
    key: 'workoutTime',
    label: 'Workouts By Duration'
  },
  {
    id: 3,
    key: 'workoutMonth',
    label: 'Workout Types'
  },{
    id: 4,
    key: 'workoutTypes',
    label: 'Workout Per Month'
  },
]

class SideNavBar extends Component {
  constructor(props) {
    super(props)

    this.setActiveChart = this.setActiveChart.bind(this)
  }

  setActiveChart(e) {
    const activeChart = _.find(SIDE_NAV_LINKS, link => link.id === e.target.value)
    this.props.setActiveChart(activeChart.key)
  }
  render() {
    const { activeChart, isAuthenticated } = this.props
    return (isAuthenticated && (
      <Col xs={2}>
        <Nav vertical>
          {_.map(SIDE_NAV_LINKS, link => {
            const itemClassName =  activeChart === link.key ? 'active-side-nav-item': 'side-nav-item'
            return (
              <NavItem
                key={link.key}
                value={link.id}
                onClick={this.setActiveChart}
                className={itemClassName}
              >
                {link.label}
              </NavItem>
            )
          })}
        </Nav>
      </Col>
    ))
  }
}


const SideBarNav = ({
  activeChart,
  isAuthenticated,
  route,
}) => {
  return (isAuthenticated && (
    <Col xs={2}>
      <Nav vertical>
        {route === '/' && <HomePageSideBar />}
        {_.map(SIDE_NAV_LINKS, link => {
          const itemClassName =  activeChart === link.key ? 'active-side-nav-item': 'side-nav-item'
          return (
            <NavItem
              key={link.key}
              value={link.id}
              onClick={this.setActiveChart}
              className={itemClassName}
            >
              {link.label}
            </NavItem>
          )
        })}
      </Nav>
    </Col>
  ))
}



SideNavBar.propTypes = {
  activeChart: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setActiveChart: PropTypes.func.isRequired,
  workoutTypes: PropTypes.array.isRequired,
}


const mapStateToProps = (state) => ({
  activeChart: getActiveChart(state),
  isAuthenticated: isAuthenticated(state),
  route: getCurrentRoute(state),
})

export default withRouter(connect(mapStateToProps, {
  setActiveChart: setActiveChartAction,
})(SideNavBar))
