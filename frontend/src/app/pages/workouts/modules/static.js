import moment from 'moment'

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

export const WORKOUT_TYPES = [
  { id: 1, name: 'Other' },
  { id: 2, name: 'Atomic'},
  { id: 3, name: 'CrossFit' },
  { id: 4, name: 'Run' },
]

export const WORKOUT_INTENSITY = [
  { id: 1, name: 'HIIT' },
  { id: 2, name: 'Strength' },
  { id: 3, name: 'Endurance'},
]
