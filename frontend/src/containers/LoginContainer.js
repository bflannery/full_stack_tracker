import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import LoginForm from '../components/users/LoginForm'
import { loginAction } from '../actions/auth'
import { authAPIErrors, isAuthenticated } from '../reducers'


const LoginContainer = props => (
  (props.isAuthenticated)
    ? <Redirect to={{ pathname: '/', from: props.location.pathname}} />
    : (
      <div className='login-page'>
        <LoginForm {...props} />
      </div>
    )
)


LoginContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  errors: authAPIErrors(state),
  isAuthenticated: isAuthenticated(state),
})

export default withRouter(connect(mapStateToProps, {
  onLoginSubmit: loginAction
})(LoginContainer))
