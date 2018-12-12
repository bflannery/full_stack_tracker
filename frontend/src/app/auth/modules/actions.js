import { authenticate } from '../../api/auth'
import { accessToken } from './selectors'
import { LOGOUT } from './static'

// loginAction
// Call to log a user in
export const loginAction = (username, password) => dispatch => {
  dispatch(authenticate(username, password))
}

export const logoutAction = () => ({
  type: LOGOUT,
})

export const withAuth = (headers = {}) => (state) => ({
  ...headers,
  'Authorization': `Bearer ${accessToken(state)}`
})


