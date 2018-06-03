import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import LoginForm from '../components/LoginForm'
import { authenticate } from '../actions/auth'
import { authErrors, isAuthenticated } from '../reducers'

const LoginContainer = props => (
    (props.isAuthenticated)
        ? <Redirect to='/' />
        : (
            <div className='login-page'>
                <LoginForm {...props} />
            </div>
        )
)

const mapStateToProps = state => ({
    errors: authErrors(state),
    isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (username, password) => {
        dispatch(authenticate(username, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);