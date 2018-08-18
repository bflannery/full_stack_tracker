import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import RegisterUserForm from '../components/users/RegisterUserForm'
import {  apiRegisterUser } from '../actions/users'
import { authAPIErrors } from '../reducers'

const RegisterPageContainer = props => (
  <div className='register-page'>
    <RegisterUserForm {...props} />
  </div>
)

const mapStateToProps = state => ({
  errors: authAPIErrors(state),
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (firstName, lastName, email, username, password) => (
    dispatch(apiRegisterUser(firstName, lastName, email, username, password))
  ),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPageContainer))