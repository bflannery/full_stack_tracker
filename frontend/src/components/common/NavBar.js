import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { logoutAction } from '../../actions/auth'
import * as reducers from '../../reducers/index'

class NavBar extends Component {
  render() {
    return (this.props.isAuthenticated) ? (
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/users'>Users</NavLink></li>
          <li><NavLink to='/workouts'>Workouts</NavLink></li>
          <li>
            <Button
              onClick={() => { this.props.logout() }}>
              Log Out
            </Button>
          </li>
        </ul>
      </nav>
    )
      : (
        <nav>
          <ul>
            <li><NavLink to='/login'>Log In</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
          </ul>
        </nav>
      )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: reducers.isAuthenticated(state)
})
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);