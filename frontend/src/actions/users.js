import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const USERS_POST_REQUEST = '@@workout/USERS_POST_REQUEST';
export const USERS_POST_SUCCESS = '@@workout/USERS_POST_SUCCESS';
export const USERS_POST_FAILURE = '@@workout/USERS_POST_FAILURE';

export const USERS_GET_REQUEST = '@@workout/USERS_GET_REQUEST';
export const USERS_GET_SUCCESS = '@@workout/USERS_GET_SUCCESS';
export const USERS_GET_FAILURE = '@@workout/USERS_GET_FAILURE';

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
      USERS_POST_REQUEST, USERS_POST_SUCCESS, USERS_POST_FAILURE
    ]
  }
})

export const apiGetUsers = () => ({
  [RSAA]: {
    endpoint: '/api/fitness/users/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      USERS_GET_REQUEST, USERS_GET_SUCCESS, USERS_GET_FAILURE
    ]
  }
})

