import { normalize } from 'normalizr'
import * as workouts from '../actions/workouts'
import * as schema from './schema'

const INITIAL_STATE = {
  workouts: [],
  workoutApiError: {},
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case workouts.WORKOUTS_GET_SUCCESS: {
          const normalizedData = normalize(action.payload.results, schema.workoutsSchema)
          return {
            ...state,
            workouts: normalizedData.entities.workouts
          }
        }
        default:
            return state
    } 
}

export const workoutsArray = (state) => state