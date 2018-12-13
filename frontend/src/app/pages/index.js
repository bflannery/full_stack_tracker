import { combineReducers } from 'redux'
import homePageReducer from './home/modules/reducers'
import workoutsPageReducer from './workouts/modules/reducers'

export default combineReducers({
  home: homePageReducer,
  workouts: workoutsPageReducer
})

