export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE'
export const TOKEN_REQUEST = '@@auth/TOKEN_REQUEST'
export const TOKEN_RECEIVED = '@@auth/TOKEN_RECEIVED'
export const TOKEN_FAILURE = '@@auth/TOKEN_FAILURE'

export const LOGOUT = '@@auth/LOGOUT'

export const INITIAL_AUTH_STATE = {
  access: '',
  refresh: '',
  authAPIErrors: {},
  lastUserCreated: ''
}
