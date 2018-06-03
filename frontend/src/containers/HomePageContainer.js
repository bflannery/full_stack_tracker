import React, { Component } from 'react';
import { connect } from 'react-redux'
import { apiGetUsers } from '../actions/users'
import { usersArray } from '../reducers/users'
import { apiGetWorkouts} from '../actions/workouts'
import { workoutsArray } from '../reducers/workouts'

class HomePageContainer extends Component {
  componentWillMount() {
    this.props.getUsers()
    this.props.getWorkouts()
}
  render() {
    return (
      <div className="workout">
        <h3> Home Page </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: usersArray(state),
  workouts: workoutsArray(state),
})
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(apiGetUsers()),
  getWorkouts: () => dispatch(apiGetWorkouts())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
