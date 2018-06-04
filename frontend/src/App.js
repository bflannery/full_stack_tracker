import React, { Component } from 'react';
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import Home from './containers/HomePageContainer';
import Users from './containers/UsersPageContainer';
import Workouts from './containers/WorkoutsPageContainer';
import Login from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import PrivateRoute from './containers/PrivateRouteContainer';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <div>
          <Route path='/login' component={Login} />
          <Route path='/register' component={RegisterContainer} />
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/users' component={Users} />
          <PrivateRoute path='/workouts' component={Workouts} />
        </div>
      </div>
    )
  }
}

export default App;
