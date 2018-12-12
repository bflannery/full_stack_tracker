import { normalize } from 'normalizr'
import * as workoutsStatic from '../../../../static/workouts'
import { workoutsSchema } from './static'

export default (state={}, action) => {
  switch (action.type) {
  case workoutsStatic.WORKOUTS_GET_SUCCESS: {
    const { payload } = action
    const normalizedWorkouts = normalize(payload.results, workoutsSchema)
    return {...state, ...normalizedWorkouts }
  }
  default:
    return state
  }
}
