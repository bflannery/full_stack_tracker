import React, { Component } from 'react';
import NavBar from './components/common/NavBar'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/HomePageContainer';
import Users from './containers/UsersPageContainer';
import Workouts from './containers/WorkoutsPageContainer';
import WorkoutChart from './components/workouts/WorkoutChart';
import Login from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import PrivateRoute from './containers/PrivateRouteContainer';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={RegisterContainer} />
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/users' component={Users} />
          <PrivateRoute path='/workouts' component={Workouts} />
          <PrivateRoute path='/workout-chart' component={WorkoutChart} />
        </Switch>
      </div>
    )
  }
}

export default App;
