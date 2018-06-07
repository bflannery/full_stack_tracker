import jwtDecode from 'jwt-decode'
import * as authStatic from '../static/auth'
import { combineEpics } from 'redux-observable'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/do'
import { push } from 'react-router-redux'


// Reducers
export default (state=authStatic.INITIAL_AUTH_STATE, action) => {
    const { payload } = action
    switch(action.type) {
      case authStatic.LOGIN_SUCCESS:
            return {
                ...state,
                access: {
                    token: payload.access,
                    ...jwtDecode(payload.access)
                },
                refresh: {
                    token: payload.refresh,
                    ...jwtDecode(payload.refresh)
                },
            }
        case authStatic.TOKEN_RECEIVED:
            return {
                ...state,
                access: {
                    token: payload.access,
                    ...jwtDecode(payload.access)
                },
                isRegistered: true,
            }
        case authStatic.LOGIN_FAILURE:
        case authStatic.TOKEN_FAILURE:
            return {
                ...authStatic.INITIAL_AUTH_STATE,
                errors:
                    action.payload.response ||
                    { 'non_field_errors': action.payload.statusText},

            }
      case authStatic.LOGOUT:
          return authStatic.INITIAL_AUTH_STATE
        default:
            return state
    }
}


// Selectors
export const getAuthUI = state => state.auth
export const accessToken = (state) => getAuthUI(state).access.token
export const isAccessTokenExpired = state => {
    const accessState = getAuthUI(state).access
    return (accessState && accessState.exp)
      ? (1000 * accessState.exp - (new Date()).getTime() < 5000)
      : true
}
export const refreshToken = (state) => (
  getAuthUI(state) ? false : getAuthUI(state).refresh.token
)
export const isRefreshTokenExpired = state => {
    const refreshState = getAuthUI(state).refresh
    return (refreshState && refreshState.exp)
      ? (1000 * refreshState.exp - (new Date()).getTime() < 5000)
      : true
}
export const isAuthenticated = state => !isRefreshTokenExpired(state)
export const authAPIErrors = state => getAuthUI(state).authAPIErrors


