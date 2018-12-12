import { normalize } from 'normalizr'
import * as usersStatic from '../../../../static/users'
import { usersSchema } from './static'

export default (state={}, action) => {
  switch (action.type) {
  case usersStatic.USERS_GET_SUCCESS: {
    const { payload } = action
    const normalizedUsers = normalize(payload.results, usersSchema)
    return { ...state, ...normalizedUsers}
  }
  default:
    return state
  }
}
