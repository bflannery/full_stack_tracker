import * as workouts from '../actions/workouts'


export default (state=[], action) => {
    switch(action.type) {
        case workouts.WORKOUTS_GET_SUCCESS:
            return action.payload
        default:
            return state
    } 
}

export const workoutsArray = (state) => state