import * as workouts from '../actions/workouts'

const INITIAL_WORKOUT_STATE = {
    owner: '',
    type: '',
    intensity: '',
    duration: '',
    caloriesBurned: '',
}

export default (state=INITIAL_WORKOUT_STATE, action) => {
    switch(action.type) {
        case workouts.WORKOUTS_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    } 
}

export const workout = (state) => state