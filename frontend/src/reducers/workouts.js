import * as workouts from '../actions/workouts'

const INITIAL_STATE = {
  workoutAPIError: {},
  newWorkout: {
    type: 1,
    intensity: 1,
    duration: 0,
    caloriesBurned: 0,
  },
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
      case workouts.EDIT_NEW_WORKOUT: {
        return {
          ...state,
          newWorkout: {
            ...state.newWorkout,
            ...action.payload
          }
        }
      }
      case workouts.WORKOUTS_POST_FAILURE:
      case workouts.WORKOUTS_GET_FAILURE:
        return {
          ...state,
          usersAPIError: action.payload.response
        }
        default:
            return state
    } 
}

export const getUI = (state) => state.workouts
export const getWorkoutAPIError = (state) => getUI(state).workoutAPIError
export const getNewWorkout = (state) => getUI(state).newWorkout