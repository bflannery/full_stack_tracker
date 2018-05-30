import React, { Component } from 'react';
import { connect } from 'react-redux'

class UsersPageContainer extends Component {
  render() {
    return (
      <div className="users">
        <h3> Users Page </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPageContainer);

