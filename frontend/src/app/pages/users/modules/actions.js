import { apiGetUsers } from '../../../api/users'

// loadUsersAction
// Can use state to grab all or specific user(s)
export const loadUsersPageAction = () => dispatch => {
  dispatch(apiGetUsers())
}
