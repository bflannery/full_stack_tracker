import React from 'react'
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

const mapStateToProps = state => ({
    errors: authAPIErrors(state),
    isAuthenticated: isAuthenticated(state),
})

export default withRouter(connect(mapStateToProps, {
  onLoginSubmit: loginAction
})(LoginContainer));