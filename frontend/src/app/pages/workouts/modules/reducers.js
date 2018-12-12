import * as workoutStatic from './static'

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
