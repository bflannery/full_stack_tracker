import storage from 'redux-persist/es/storage'
import apiMiddleware  from './app/utils/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, createStore } from 'redux'
import { createFilter } from 'redux-persist-transform-filter'
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import loggerMiddleware from 'redux-logger'
import rootReducer, { rootEpic } from './app/index'
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
  const persistedFilter = createFilter('auth', ['access', 'refresh'])

  const persistConfig = {
    key: 'polls',
    storage: storage,
    whitelist: ['auth'],
    blacklist: ['router'],
    transforms: [persistedFilter]
  }

  const reducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(
    reducer, {}, composeWithDevTools(
      applyMiddleware(...middleware)
    ))

  if (module.hot) {
    module.hot.accept(() => {
      // This fetch the new state of the above reducers.
      store.replaceReducer(
        persistReducer(persistConfig, rootReducer)
      )
    })
  }

  persistStore(store)
  return store
}
