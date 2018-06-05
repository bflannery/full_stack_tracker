import * as users from '../actions/users'

const INITIAL_STATE = {
  usersAPIError: {},
  lastUserCreated: ''
}
export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case users.USERS_POST_SUCCESS: {
      return {
        ...state,
        lastUserCreated: action.payload.email
      }
    }
    case users.USERS_POST_FAILURE:
    case users.USERS_GET_FAILURE:
      return {
        ...state,
        usersAPIError: action.payload.response
      }
    default:
      return state
  }
}

export const getUsersState = state => state.users
export const getUsersAPIErrors = state => getUsersState(state).usersAPIError
export const lastUserCreated = state => getUsersState(state).lastUserCreated