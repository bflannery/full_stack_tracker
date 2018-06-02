import { normalize } from 'normalizr'
import * as users from '../actions/users'
import * as schema from './schema'

const INITIAL_STATE = {
  users: [],
  apiError: {},
}
export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case users.USERS_GET_SUCCESS:
     const normalizedData = normalize(action.payload.results, schema.usersSchema)
      return {
        ...state,
        users: normalizedData.entities.users
      }
    case users.USERS_POST_FAILURE:
    case users.USERS_GET_FAILURE:
      return {
        ...state,
        errors: action.payload.response
      }
    default:
      return state
  }
}

export const usersArray = (state) => state.users
export const usersApiError = (state) => state.apiError