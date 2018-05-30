import React, { Component } from 'react';
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/HomePageContainer';
import Users from './containers/UsersPageContainer';
import Workouts from './containers/WorkoutsPageContainer';
import Login from './containers/LoginContainer';
import PrivateRoute from './containers/PrivateRouteContainer';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/users' component={Users} />
          <PrivateRoute exact path='/workouts' component={Workouts} />
        </Switch>
      </div>
    )
  }
}

export default App;
