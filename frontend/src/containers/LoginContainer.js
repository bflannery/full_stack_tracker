import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import { authenticate } from '../actions/auth'
import { authAPIErrors, isAuthenticated } from '../reducers'


const LoginContainer = props => {
  return (props.isAuthenticated)
      ? <Redirect to={{ pathname: '/', from: props.location.pathname}} />
      : (
        <div className='login-page'>
          <LoginForm {...props} />
        </div>
      )
}

const mapStateToProps = state => ({
    errors: authAPIErrors(state),
    isAuthenticated: isAuthenticated(state),
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (username, password) => {
        dispatch(authenticate(username, password))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));