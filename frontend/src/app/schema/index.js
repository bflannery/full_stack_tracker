import { combineReducers } from 'redux'
import usersReducer from './users/modules/reducers'
import workoutsReducer from './workouts/modules/reducers'

export default combineReducers({
  users: usersReducer,
  workouts: workoutsReducer
})
