import { normalize } from 'normalizr'
import * as users from '../actions/users'
import * as schema from './schema'

export default (state=[], action) => {
  switch(action.type) {
    case users.USERS_GET_SUCCESS:
     const normalizedData = normalize(action.payload.results, schema.usersSchema)
      return normalizedData.entities.users
    default:
      return state
  }
}

export const usersArray = (state) => state