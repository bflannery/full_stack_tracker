import React, { Component } from 'react'
import _ from 'lodash'
import { Nav, NavItem } from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutAction } from '../../actions/auth'
import { isAuthenticated } from '../../reducers/index'
import { NavLink } from 'react-router-dom'


class NavBar extends Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
    const { isAuthenticated } = this.props
    return (
      (isAuthenticated && (
        <Nav className="navbar-list">
          <NavItem className="navbar-item">
            <NavLink to='/'>Home</NavLink>
          </NavItem>
          <NavItem className="navbar-item">
            <NavLink to='/workouts'>Workouts</NavLink>
          </NavItem>
          <NavItem className="navbar-item" id="navbar-logout-button">
            <NavLink
              to='/'
              onClick={this.handleLogout}
            >Log Out</NavLink>
          </NavItem>
        </Nav>
      ))
    )
  }
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func,
}

const mapStateToProps = state => {
  const path = _.find(state, 'router.location.pathname')
  const getIsRegistering = (_.isEqual(path, '/register'))
  return {
    isAuthenticated: isAuthenticated(state),
    isRegistering: getIsRegistering,
  }
}

export default connect(mapStateToProps, {
  logout: logoutAction,
})(NavBar)
