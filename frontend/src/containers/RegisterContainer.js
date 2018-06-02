import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import RegisterUserForm from '../components/RegisterUserForm'
import { apiPostUsers } from '../actions/users'
import { authErrors } from '../reducers'

const RegisterPageContainer = props => (
    <div className='login-page'>
      <RegisterUserForm {...props} />
    </div>
  )

const mapStateToProps = state => ({
  errors: authErrors(state),
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (firstName, lastName, email, username, password) => {
    dispatch(apiPostUsers(firstName, lastName, email, username, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPageContainer);