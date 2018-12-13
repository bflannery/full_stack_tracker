import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  loadUsersPageAction
} from '../modules/actions'

class UsersPageContainer extends Component {
  componentWillMount() {
    const { loadUsersPage } = this.props
    loadUsersPage()
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
  loadUsersPage: PropTypes.func.isRequired,
}



// const mapStateToProps = (state) => ({})
export default connect({}, {
  loadUsersPage: loadUsersPageAction
})(UsersPageContainer)

