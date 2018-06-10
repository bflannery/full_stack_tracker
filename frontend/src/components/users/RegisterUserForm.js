import React, { Component } from 'react'
import { Alert, Button, Jumbotron, Form } from 'reactstrap'
import TextInput from '../common/TextInput'


const DEFAULT_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: ''
}

export default class RegisterUserForm extends Component {
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
    this.props.onSubmit(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.username,
      this.state.password,
    )
    this.state = DEFAULT_STATE
  }

  render() {
    const errors = this.props.errors || {}

    return (
      <Jumbotron className="container">
        <Form onSubmit={this.onSubmit}>
          <h1> Register New User </h1>
          {errors.non_field_errors && (
            <Alert color="danger">
              {errors.non_field_errors}
            </Alert>
          )}
          <TextInput
            name="firstName"
            label="First Name"
            error={errors.firstName}
            onChange={this.handleInputChange}
          />

          <TextInput
            name="lastName"
            label="Last Name"
            error={errors.lastName}
            onChange={this.handleInputChange}
          />
          <TextInput
            name="email"
            label="Email"
            error={errors.email}
            onChange={this.handleInputChange}
          />
          <TextInput
            name="username"
            label="Username"
            error={errors.username}
            onChange={this.handleInputChange}
          />
          <TextInput
            name="password"
            label="Password"
            error={errors.password}
            type="password"
            onChange={this.handleInputChange}
          />
          <Button
            type="submit"
            color="primary"
            size="lg"
          >
            Register
          </Button>
        </Form>
      </Jumbotron>
    )
  }
}