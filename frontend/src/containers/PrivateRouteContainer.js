import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticated } from '../reducers/'

const PrivateRouteContainer = ({
    component: Component,
    isUserAuthenticated,
    ...rest
}) => (
    <Route {...rest} render={props => {
     return (
        isUserAuthenticated
          ? <Component {...props} />
          : (
            <Redirect to='/login'
            />
          ))
    }
      }
    />
)

const mapStateToProps = state => ({
  isUserAuthenticated: isAuthenticated(state)
})

export default withRouter(connect(mapStateToProps)(PrivateRouteContainer))