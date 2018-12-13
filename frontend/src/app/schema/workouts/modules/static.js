import { schema } from 'normalizr'
import moment from 'moment'

export const workout = new schema.Entity('workouts', { idAttribute: 'id'})

export const workoutsSchema = [workout]

export const WORKOUTS_POST_REQUEST = '@@workout/WORKOUTS_POST_REQUEST'
export const WORKOUTS_POST_SUCCESS = '@@workout/WORKOUTS_POST_SUCCESS'
export const WORKOUTS_POST_FAILURE = '@@workout/WORKOUTS_POST_FAILURE'

export const WORKOUTS_GET_REQUEST = '@@workout/WORKOUTS_GET_REQUEST'
export const WORKOUTS_GET_SUCCESS = '@@workout/WORKOUTS_GET_SUCCESS'
export const WORKOUTS_GET_FAILURE = '@@workout/WORKOUTS_GET_FAILURE'

export const EDIT_NEW_WORKOUT = '@@workout/EDIT_NEW_WORKOUT'


export const INITIAL_WORKOUT_STATE = {
  workoutAPIError: {},
  newWorkout: {
    created_at: moment().format('MM-DD-YYYY hh:mm:ss A'),
    type: 1,
    intensity: 1,
    duration: '00:00:00',
    calories_burned: 0,
  },
}
