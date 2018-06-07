import { RSAA } from 'redux-api-middleware';
import * as authStatic from '../static/auth'

export const authenticate = (username, password) => ({
    [RSAA]: {
    endpoint: '/api/auth/token/obtain/',
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json' },
    types: [
      authStatic.LOGIN_REQUEST,
      authStatic.LOGIN_SUCCESS,
      authStatic.LOGIN_FAILURE
    ]
  }
})

export const refreshAccessToken = (token) => ({
    [RSAA]: {
        endpoint: '/api/auth/token/refresh/',
        method: 'POST',
        body: JSON.stringify({refresh: token}),
        headers: { 'Content-Type': 'application/json' },
        types: [
          authStatic.TOKEN_REQUEST,
          authStatic.TOKEN_RECEIVED,
          authStatic.TOKEN_FAILURE
        ]
    }
})

export const logoutAction = () => ({
  type: authStatic.LOGOUT
})
