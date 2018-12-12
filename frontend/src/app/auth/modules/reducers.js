import jwtDecode from 'jwt-decode'
import * as authStatic from './static'

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
    return {
      ...authStatic.INITIAL_AUTH_STATE,
      authAPIErrors: action.payload.response || { 'non_field_errors': action.payload.statusText},

    }
  case authStatic.TOKEN_FAILURE:
    return {
      ...authStatic.INITIAL_AUTH_STATE,
      authAPIErrors: action.payload.response || { 'non_field_errors': action.payload.statusText},

    }
  case authStatic.LOGOUT:
    return authStatic.INITIAL_AUTH_STATE
  default:
    return state
  }
}
