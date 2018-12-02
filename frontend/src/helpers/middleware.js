import { isRSAA, apiMiddleware } from 'redux-api-middleware'
import { refreshAccessToken } from '../actions/auth'
import {TOKEN_RECEIVED} from '../static/auth'
import { refreshToken, isAccessTokenExpired } from '../reducers/index'

export function createApiMiddleware() {
  let postponedRSAAs = []

  return ({ dispatch, getState }) => {
    const rsaaMiddleware = apiMiddleware({ dispatch, getState})
    return (next) => (action) => {
      const nextCheckPostponed = (nextAction) => {
        //Run postponed actions after token refresh
        if (nextAction.type === TOKEN_RECEIVED) {
          next(nextAction)
          postponedRSAAs.forEach((postponed) => {
            rsaaMiddleware(next)(postponed)
          })
          postponedRSAAs = []
        } else {
          next(nextAction)
        }
      }

      if(isRSAA(action)) {
        const state = getState(), token = refreshToken(state)
        if (token && isAccessTokenExpired(state)) {
          postponedRSAAs.push(action)
          if (postponedRSAAs.length === 1) {
            const action = refreshAccessToken(token)
            return rsaaMiddleware(nextCheckPostponed)(action)
          }
          return
        }
        return rsaaMiddleware(next)(action)
      }
      return next(action)
    }
  }
}

export default createApiMiddleware()
