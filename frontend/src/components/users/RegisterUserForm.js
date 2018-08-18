import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Container, Form } from 'reactstrap'
import TextInput from '../common/TextInput'
import { Link } from 'react-router-dom'

const DEFAULT_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: ''
}

class RegisterUserForm extends Component {
  state = DEFAULT_STATE

  handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.onRegisterSubmit(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.username,
      this.state.password,
    )
    this.setState(DEFAULT_STATE)
  }

  render() {
    const errors = this.props.errors || {}

    return (
      <Container className="col-md-12" id="register-container">
        <Form
          id="register-form"
          className="col-md-6 register-form"
          onSubmit={this.onSubmit}
        >
          {errors.non_field_errors && (
            <Alert color="danger">
              {errors.non_field_errors}
            </Alert>
          )}
          <TextInput
            className="col-md-8 register-input"
            name="username"
            placeholder="Username"
            error={errors.username}
            onChange={this.handleInputChange}
          />
          <TextInput
            className="col-md-8 register-input"
            name="password"
            placeholder="Password"
            error={errors.password}
            type="password"
            onChange={this.handleInputChange}
          />

          <TextInput
            className="col-md-8 register-input"
            name="firstName"
            placeholder="First Name"
            error={errors.firstName}
            onChange={this.handleInputChange}
          />
          <TextInput
            className="col-md-8 register-input"
            name="lastName"
            placeholder="Last Name"
            error={errors.lastName}
            onChange={this.handleInputChange}
          />
          <TextInput
            className="col-md-8 register-input"
            name="email"
            placeholder="Email"
            error={errors.email}
            onChange={this.handleInputChange}
          />
          <Button
            id="register-submit-button"
            className="col-md-8"
            type="submit"
            color="info"
            size="lg"
          >
            Register
          </Button>
          <Container id="register-to-container">
            <span>Already Registered?
              <Link  to='/login'> Login </Link>
            </span>
          </Container>
        </Form>
      </Container>
    )
  }
}

RegisterUserForm.propTypes = {
  onRegisterSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
}

export default RegisterUserForm