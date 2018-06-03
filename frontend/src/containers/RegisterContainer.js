import React from 'react'
import { connect } from 'react-redux'

import RegisterUserForm from '../components/RegisterUserForm'
import {  apiRegisterUser } from '../actions/users'
import { authErrors } from '../reducers'

const RegisterPageContainer = (props) => (
    <div className='register-page'>
      <RegisterUserForm {...props} />
    </div>
)

const mapStateToProps = state => ({
  errors: authErrors(state),
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (firstName, lastName, email, username, password) => {
    dispatch(apiRegisterUser(firstName, lastName, email, username, password))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPageContainer);