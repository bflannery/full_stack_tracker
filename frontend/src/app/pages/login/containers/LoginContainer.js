import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import { loginAction } from '../../../auth/modules/actions'
import { authAPIErrors, isAuthenticated } from '../../../auth/modules/selectors'


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
