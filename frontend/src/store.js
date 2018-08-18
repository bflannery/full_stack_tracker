import storage from 'redux-persist/es/storage'
import apiMiddleware  from './helpers/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, createStore } from 'redux'
import { createFilter } from 'redux-persist-transform-filter'
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import loggerMiddleware from 'redux-logger'
import rootReducer, { rootEpic } from './reducers'
import thunkMiddleware from 'redux-thunk'

// const epicMiddleware = createEpicMiddleware(rootEpic)

export default history => {

  const middleware = [
    apiMiddleware,
    routerMiddleware(history),
    thunkMiddleware,
    loggerMiddleware,
    // epicMiddleware,
  ]
  const persistedFilter = createFilter(
    'auth', ['access', 'refresh']
  )

  const reducer = persistReducer(
    {
      key: 'polls',
      storage: storage,
      whitelist: ['auth'],
      transforms: [persistedFilter]
    },
    rootReducer
  )

  const store = createStore(
    reducer, {}, composeWithDevTools(
      applyMiddleware(...middleware)
    ))

  persistStore(store)
  return store
}