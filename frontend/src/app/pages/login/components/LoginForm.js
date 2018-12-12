import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Container, Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import TextInput from '../../../common/ui/TextInput'


const DEFAULT_STATE = {
  username: null,
  password: null,
}

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = DEFAULT_STATE
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    const { username, password } = this.state
    const { onLoginSubmit } = this.props
    e.preventDefault()
    onLoginSubmit(username, password)
    this.setState(DEFAULT_STATE)
  }

  render() {
    const errors = this.props.errors || {}
    return (
      <Container className="col-md-12" id="login-container">
        <Form
          id="login-form"
          className="col-md-6"
          onSubmit={this.onSubmit}
        >
          {errors.non_field_errors && (
            <Alert color="danger">
              {errors.non_field_errors}
            </Alert>
          )}
          <TextInput
            icon="fas fa-user"
            id="login-username-input"
            className="col-md-8 login-input"
            name="username"
            required
            placeholder="Username"
            value={this.state.username || ''}
            onChange={this.handleInputChange}
          />
          <TextInput
            id="login-password-input"
            className="col-md-8 login-input"
            name="password"
            required
            placeholder="Password"
            type="password"
            value={this.state.password || ''}
            onChange={this.handleInputChange}
          />
          <Button
            id="login-submit-button"
            className="col-md-8"
            type="submit"
            color="info"
            size="lg"
          >
            Log In
          </Button>
          <Container id="login-to-register-container">
            <span>Not a Member Yet?
              <Link  to='/register'> Register </Link>
            </span>
          </Container>
        </Form>
      </Container>
    )
  }
}

LoginForm.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
}

export default LoginForm
