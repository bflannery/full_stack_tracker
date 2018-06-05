import { schema, normalize } from 'normalizr';
import * as users from '../actions/users'
import * as workouts from '../actions/workouts'

export const user = new schema.Entity('users', { idAttribute: 'id'});
export const workout = new schema.Entity('workouts', { idAttribute: 'id'});

export const usersSchema = [user]
export const workoutsSchema = [workout]

// TODO: As the app grows catching entities individually will become burdensome
// Need to refactor to listen for specific caching options in API call

const INITIAL_SCHEMA_STATE = {
  users: {},
  workouts: {},
}

export default (state=INITIAL_SCHEMA_STATE, action) => {
  switch (action.type) {
    case users.USERS_GET_SUCCESS: {
      const { payload } = action
      const normalized = normalize(payload.results, usersSchema)
      return {
        ...state,
        users: !normalized.entities.users
          ? INITIAL_SCHEMA_STATE.users
          : normalized.entities.users
      }
    }
    case workouts.WORKOUTS_GET_SUCCESS: {
      const { payload } = action
      const normalized = normalize(payload.results, workoutsSchema)
      return {
        ...state,
        workouts: !normalized.entities.workouts
          ? INITIAL_SCHEMA_STATE.workouts
          : normalized.entities.workouts
      }
    }
    default:
      return state
  }
}

export const getSchemaUI = (state) => state.schema
export const getWorkoutsSchema = (state) => getSchemaUI(state).workouts
export const getUsersSchema = (state) => getSchemaUI(state).users