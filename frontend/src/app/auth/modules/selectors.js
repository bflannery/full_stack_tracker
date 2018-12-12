// Selectors
export const getAuthUI = state => state.auth
export const accessToken = (state) => getAuthUI(state).access.token
export const refreshToken = (state) => (
  !getAuthUI(state).refresh ? false : getAuthUI(state).refresh.token
)

export const isAccessTokenExpired = state => {
  const accessState = getAuthUI(state).access
  return (accessState && accessState.exp)
    ? (1000 * accessState.exp - (new Date()).getTime() < 5000)
    : true
}

export const isRefreshTokenExpired = state => {
  const refreshState = getAuthUI(state).refresh
  return (refreshState && refreshState.exp)
    ? (1000 * refreshState.exp - (new Date()).getTime() < 5000)
    : true
}

export const isAuthenticated = state => !isRefreshTokenExpired(state)
export const authAPIErrors = state => getAuthUI(state).authAPIErrors
