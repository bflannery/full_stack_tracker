import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postWorkoutsAPI } from './actions/workouts'
import { serverWorkout } from './reducers/index'


class App extends Component {
    componentDidMount() {
        this.props.postWorkout({
            type: 3,
            intensity: 1,
            duration: 6200,
            calories_burned: 500
        })
    }
  render() {
    return (
      <div className="App">
          <h3> Workout </h3>
          <p> {this.props.workout.type} </p>
          <p> {this.props.workout.intensity} </p>
          <p> {this.props.workout.duration} </p>
          <p> {this.props.workout.calories_burned} </p>
      </div>
    );
  }
}

export default connect(
    state => ({workout: serverWorkout(state)}),
    { postWorkout: postWorkoutsAPI }
)(App);
