import { EDIT_NEW_WORKOUT } from './static'
import { apiGetWorkouts, apiPostWorkout } from '../../../api/workouts'
import { getNewWorkout } from './selectors'
export const editWorkoutAction = (workoutChanges = {}) => ({
  type: EDIT_NEW_WORKOUT,
  payload: workoutChanges,
})

export const saveNewWorkoutAction = () => (dispatch, getState) => {
  const state = getState()
  const newWorkout = getNewWorkout(state)
  dispatch(apiPostWorkout(newWorkout))
}

// loadWorkoutsPageAction
// Can use state to grab all or specific workout(s)
export const loadWorkoutsPageAction = () => dispatch => {
  dispatch(apiGetWorkouts())
}
