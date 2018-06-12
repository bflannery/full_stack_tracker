import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutAction } from '../../actions/auth'
import { isAuthenticated} from '../../reducers/index'

class NavBar extends Component {
  render() {
    const navBar = (this.props.isAuthenticated) ? (
       <ul className="auth-navbar-list">
        <li className="navbar-item"><NavLink to='/'>Home</NavLink></li>
        <li className="navbar-item"><NavLink to='/users'>Users</NavLink></li>
        <li className="navbar-item"><NavLink to='/workouts'>Workouts</NavLink></li>
        <li className="navbar-item" id="navbar-logout-button">
          <NavLink
            to='/'
            onClick={() => {
              this.props.logout()
            }}
          >Log Out</NavLink>
        </li>
      </ul>
      ) : (
        <ul className="unauth-navbar-list">
          <li className="navbar-item"><NavLink to='/login'>Log In</NavLink></li>
          <li className="navbar-item"><NavLink to='/register'>Register</NavLink></li>
        </ul>
      )
    return (
      <nav>
        {navBar}
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state)
})

export default connect(mapStateToProps, {
  logout: logoutAction
})(NavBar);