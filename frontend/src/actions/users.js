import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'
import * as staticUsers from '../static/users'

export const apiRegisterUser = (firstName, lastName, email, username, password) => ({
  [RSAA]: {
    endpoint: '/api/register/',
    method: 'POST',
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json' },
    types: [
      staticUsers.USERS_POST_REQUEST,
      staticUsers.USERS_POST_SUCCESS,
      staticUsers.USERS_POST_FAILURE
    ]
  }
})

export const apiGetUsers = () => ({
  [RSAA]: {
    endpoint: '/api/fitness/users/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      staticUsers.USERS_GET_REQUEST,
      staticUsers.USERS_GET_SUCCESS,
      staticUsers.USERS_GET_FAILURE
    ]
  }
})

// loadUsersAction
// Can use state to grab all or specific user(s)
export const loadUsersAction = () => dispatch => {
  dispatch(apiGetUsers())
}