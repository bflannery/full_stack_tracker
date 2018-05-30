import React, { Component } from 'react';
import { connect } from 'react-redux'

class WorkoutsPageContainer extends Component {
  render() {
    return (
      <div className="workout">
        <h3> Workouts Page </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutsPageContainer);
