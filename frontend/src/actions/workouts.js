import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'
import { getNewWorkout } from '../reducers/workouts'

export const WORKOUTS_POST_REQUEST = '@@workout/WORKOUTS_POST_REQUEST';
export const WORKOUTS_POST_SUCCESS = '@@workout/WORKOUTS_POST_SUCCESS';
export const WORKOUTS_POST_FAILURE = '@@workout/WORKOUTS_POST_FAILURE';

export const WORKOUTS_GET_REQUEST = '@@workout/WORKOUTS_GET_REQUEST';
export const WORKOUTS_GET_SUCCESS = '@@workout/WORKOUTS_GET_SUCCESS';
export const WORKOUTS_GET_FAILURE = '@@workout/WORKOUTS_GET_FAILURE';

export const EDIT_NEW_WORKOUT = '@@workout/EDIT_NEW_WORKOUT';

export const apiPostWorkout = (workout) => ({
  [RSAA]: {
    endpoint: '/api/fitness/workouts/',
    method: 'POST',
    body: JSON.stringify(workout),
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      WORKOUTS_POST_REQUEST, WORKOUTS_POST_SUCCESS, WORKOUTS_POST_FAILURE
    ]
  }
})


export const apiGetWorkouts = () => ({
  [RSAA]: {
    endpoint: '/api/fitness/workouts/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      WORKOUTS_GET_REQUEST, WORKOUTS_GET_SUCCESS, WORKOUTS_GET_FAILURE
    ]
  }
})

export const editWorkoutAction = (workoutChanges = {}) => ({
  type: EDIT_NEW_WORKOUT,
  payload: workoutChanges,
})

export const saveNewWorkoutAction = () => (dispatch, getState) => {
  const state = getState()
  const newWorkout = getNewWorkout(state)
  dispatch(apiPostWorkout(newWorkout))
}