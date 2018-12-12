import { combineReducers } from 'redux'
import pagesReducer from './pages/index'
import schemaReducer from './schema/index'

export default combineReducers({
  pages: pagesReducer,
  schema: schemaReducer,
})
