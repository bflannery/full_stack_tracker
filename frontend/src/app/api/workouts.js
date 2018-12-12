import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../auth/modules/actions'
import * as workoutsStatic from '../../static/workouts'

export const apiPostWorkout = (workout) => ({
  [RSAA]: {
    endpoint: '/api/fitness/workouts/',
    method: 'POST',
    body: JSON.stringify(workout),
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      workoutsStatic.WORKOUTS_POST_REQUEST,
      workoutsStatic.WORKOUTS_POST_SUCCESS,
      workoutsStatic.WORKOUTS_POST_FAILURE
    ]
  }
})

export const apiGetWorkouts = () => ({
  [RSAA]: {
    endpoint: '/api/fitness/workouts/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      workoutsStatic.WORKOUTS_GET_REQUEST,
      workoutsStatic.WORKOUTS_GET_SUCCESS,
      workoutsStatic.WORKOUTS_GET_FAILURE
    ]
  }
})
