import jwtDecode from 'jwt-decode'
import * as auth from '../actions/auth'
import * as users from '../actions/users'
import { combineEpics } from 'redux-observable'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/do'
import { push } from 'react-router-redux'


const INITIAL_STATE = {
    access: '',
    refresh: '',
    authAPIErrors: {},
    lastUserCreated: ''
}

// Reducers
export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
      case auth.LOGIN_SUCCESS:
            return {
                ...state,
                access: {
                    token: action.payload.access,
                    ...jwtDecode(action.payload.access)
                },
                refresh: {
                    token: action.payload.refresh,
                    ...jwtDecode(action.payload.refresh)
                },
            }
        case auth.TOKEN_RECEIVED:
            return {
                ...state,
                access: {
                    token: action.payload.access,
                    ...jwtDecode(action.payload.access)
                },
                isRegistered: true,
            }
        case auth.LOGIN_FAILURE:
        case auth.TOKEN_FAILURE:
            return {
                ...INITIAL_STATE,
                errors:
                    action.payload.response ||
                    { 'non_field_errors': action.payload.statusText},

            }
      case auth.LOGOUT:
          return INITIAL_STATE
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
export const refreshToken = (state) => getAuthUI(state).refresh.token
export const isRefreshTokenExpired = state => {
    const refreshState = getAuthUI(state).refresh
    return (refreshState && refreshState.exp)
      ? (1000 * refreshState.exp - (new Date()).getTime() < 5000)
      : true
}
export const isAuthenticated = state => !isRefreshTokenExpired(state)
export const authAPIErrors = state => getAuthUI(state).authAPIErrors


