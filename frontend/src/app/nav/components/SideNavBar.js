import React, { Component } from 'react'
import { Nav, NavItem, Col, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setActiveChartAction } from '../../pages/home/modules/actions'
import { getActiveChart } from  '../../pages/home/modules/selectors'
import { getCurrentRoute, getSideBarItems } from '../modules/selectors'
import { isAuthenticated } from '../../auth/modules/selectors'
import { HOME_NAV_ITEMS } from'../modules/static'

class HomePageSideBar extends Component {
  constructor(props) {
    super(props)

    this.setActiveChart = this.setActiveChart.bind(this)
  }

  setActiveChart(e) {
    const activeChart = _.find(this.props.sideBarItems, link => link.id === e.target.value)
    this.props.setActiveChart(activeChart.key)
  }
  render() {
    const { activeChart, sideBarItems } = this.props
    console.log({sideBarItems})
    return (
      <Nav vertical>
        {_.map(HOME_NAV_ITEMS.navItems, item => {
          const itemClassName =  activeChart === item.key ? 'active-side-nav-item': 'side-nav-item'
          return (
            <NavItem
              key={item.key}
              value={item.id}
              onClick={this.setActiveChart}
              className={itemClassName}
            >
              {item.label}
            </NavItem>
          )
        })}
      </Nav>
    )
  }
}

HomePageSideBar.propTypes = {
  activeChart: PropTypes.string.isRequired,
  setActiveChart: PropTypes.func.isRequired,
  sideBarItems: PropTypes.object.isRequired,
}

class WorkoutsPageSideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { sideBarItems } = this.props
    console.log({sideBarItems})
    return (
      <Nav vertical>
      <NavItem>
        <InputGroup>
          <Input outline color="primary" size="sm"/>
          <InputGroupAddon addonType="append">
              <Button outline color="secondary" size="sm"> Filter </Button>
            </InputGroupAddon>
        </InputGroup>
      </NavItem>
      </Nav>
    )
  }
}

WorkoutsPageSideBar.propTypes = {
  sideBarItems: PropTypes.object.isRequired,
}

const SideNavBar = ({
  activeChart,
  isAuthenticated,
  route,
  setActiveChart,
  sideBarItems,
}) => {
  return (isAuthenticated && (
    <Col xs={2}>
      {route === '/' && (
        <HomePageSideBar
          activeChart={activeChart}
          setActiveChart={setActiveChart}
          sideBarItems={sideBarItems}
        />
      )}
      {route === '/workouts' && (
        <WorkoutsPageSideBar
          sideBarItems={sideBarItems}
        />
      )}
    </Col>
  ))
}

SideNavBar.propTypes = {
  activeChart: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setActiveChart: PropTypes.func.isRequired,
  sideBarItems: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  activeChart: getActiveChart(state),
  isAuthenticated: isAuthenticated(state),
  route: getCurrentRoute(state),
  sideBarItems: getSideBarItems(state),
})

export default withRouter(connect(mapStateToProps, {
  setActiveChart: setActiveChartAction,
})(SideNavBar))
