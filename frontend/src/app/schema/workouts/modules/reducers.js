import { normalize } from 'normalizr'
import {
  workoutsSchema,
  WORKOUTS_GET_SUCCESS
} from './static'

export default (state={}, action) => {
  switch (action.type) {
  case WORKOUTS_GET_SUCCESS: {
    const { payload } = action
    const normalizedWorkouts = normalize(payload.results, workoutsSchema)
    return {...state, ...normalizedWorkouts }
  }
  default:
    return state
  }
}
