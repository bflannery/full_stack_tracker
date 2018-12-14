import { normalize } from 'normalizr'
import {
  usersSchema,
  USERS_GET_SUCCESS,
} from './static'

export default (state={}, action) => {
  switch (action.type) {
  case USERS_GET_SUCCESS: {
    const { payload } = action
    const normalizedResults = normalize(payload.results, usersSchema)
    return { ...state, ...normalizedResults.entities.users}
  }
  default:
    return state
  }
}
