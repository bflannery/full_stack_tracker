import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import NavBar from './app/nav/components/NavBar'
import SideNavBar from './app/nav/components/SideNavBar'
import { Route, Switch } from 'react-router-dom'
import Home from './app/pages/home/containers/HomePageContainer'
import Users from './app/pages/users/containers/UsersPageContainer'
import Workouts from './app/pages/workouts/containers/WorkoutsPageContainer'
import Login from './app/pages/login/containers/LoginContainer'
import RegisterContainer from './app/pages/login/containers/RegisterContainer'
import PrivateRoute from './app/auth/containers/PrivateRouteContainer'

class App extends Component {
  render() {
    return (
      <div style={{ padding: 0,  margin: '0 50px'}}>
        <NavBar />
        <Row>
          <SideNavBar />
          <Col xs={9}>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={RegisterContainer} />
              <PrivateRoute exact path='/' component={Home} />
              <PrivateRoute path='/users' component={Users} />
              <PrivateRoute path='/workouts' component={Workouts} />
            </Switch>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
