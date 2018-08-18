import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  loadUsersAction
} from '../actions/users'

class UsersPageContainer extends Component {
  componentWillMount() {
    const { loadUsers } = this.props
    loadUsers()
  }
  render() {
    return (
      <div className="users">
        <h3> Users Page </h3>
      </div>
    )
  }
}

UsersPageContainer.propTypes = {
  loadUsers: PropTypes.func.isRequired,
}



// const mapStateToProps = (state) => ({})
export default connect({}, {
  loadUsers: loadUsersAction
})(UsersPageContainer)

