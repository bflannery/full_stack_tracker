import { RSAA } from 'redux-api-middleware'
import {
  getNewWorkout,
  withAuth
} from '../reducers'
import * as workoutsStatic from '../static/workouts'
import moment from 'moment'

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

export const editWorkoutAction = (workoutChanges = {}) => ({
  type: workoutsStatic.EDIT_NEW_WORKOUT,
  payload: workoutChanges,
})

export const saveNewWorkoutAction = () => (dispatch, getState) => {
  const state = getState()
  const newWorkout = getNewWorkout(state)
  const durationInSeconds = moment.duration(newWorkout.duration).asSeconds()
  dispatch(apiPostWorkout({
    ...newWorkout,
    duration: durationInSeconds
  })
  )
}

// loadWorkoutsAction
// Can use state to grab all or specific workout(s)
export const loadWorkoutsAction = () => (dispatch, getState) => {
  dispatch(apiGetWorkouts())
}