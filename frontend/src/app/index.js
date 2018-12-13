import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { routerReducer } from 'react-router-redux'
import authReducer from './auth/modules/reducers'
import pagesReducer from './pages/index'
import schemaReducer from './schema/index'

export default combineReducers({
  auth: authReducer,
  pages: pagesReducer,
  schema: schemaReducer,
  router: routerReducer,

})

export const rootEpic = combineEpics()
