import * as usersStatic from '../static/users'

export default (state=usersStatic.INITIAL_USERS_STATE, action) => {
  switch(action.type) {
    case usersStatic.USERS_POST_SUCCESS: {
      return {
        ...state,
        lastUserCreated: action.payload.email
      }
    }
    case usersStatic.USERS_POST_FAILURE:
    case usersStatic.USERS_GET_FAILURE:
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