import React, { Component } from 'react';
import { connect } from 'react-redux'
import { apiGetWorkouts } from '../actions/workouts'

class HomePageContainer extends Component {
  componentWillMount() {
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

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  getWorkouts: () => dispatch(apiGetWorkouts())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
