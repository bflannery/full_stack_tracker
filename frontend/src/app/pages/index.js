import { combineReducers } from 'redux'
import homePageReducer from './home/modules/reducers'

export default combineReducers({
  home: homePageReducer
})

