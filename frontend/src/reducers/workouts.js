import { normalize } from 'normalizr'
import * as workouts from '../actions/workouts'
import * as schema from './schema'


export default (state=[], action) => {
    switch(action.type) {
        case workouts.WORKOUTS_GET_SUCCESS: {
          const normalizedData = normalize(action.payload.results, schema.workoutsSchema)
          return normalizedData.entities.workouts
        }
        default:
            return state
    } 
}

export const workoutsArray = (state) => state