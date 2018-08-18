import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticated } from '../reducers/'

const PrivateRouteContainer = ({
  component: Component,
  isUserAuthenticated,
  ...rest
}) =>
  <Route {...rest} render={props => (
    isUserAuthenticated
      ? <Component {...props} />
      : <Redirect to='/login' />
  )}
  />

PrivateRouteContainer.propTypes = {
  component: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isUserAuthenticated: isAuthenticated(state)
})

export default withRouter(connect(mapStateToProps)(PrivateRouteContainer))