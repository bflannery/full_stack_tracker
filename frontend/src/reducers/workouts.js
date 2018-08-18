import * as workoutStatic from '../static/workouts'

// Reducers
export default (state=workoutStatic.INITIAL_WORKOUT_STATE, action) => {
  switch(action.type) {
  case workoutStatic.EDIT_NEW_WORKOUT: {
    return {
      ...state,
      newWorkout: {
        ...state.newWorkout,
        ...action.payload
      }
    }
  }
  case workoutStatic.WORKOUTS_POST_FAILURE:
  case workoutStatic.WORKOUTS_GET_FAILURE:
    return {
      ...state,
      usersAPIError: action.payload.response
    }
  default:
    return state
  } 
}


// Selectors
export const getUI = (state) => state.workouts
export const getWorkoutAPIError = (state) => getUI(state).workoutAPIError
export const getNewWorkout = (state) => getUI(state).newWorkout