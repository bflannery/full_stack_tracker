import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer, * as fromAuth from './auth'
import workoutReducer, * as fromWorkouts from './workouts'
import schemaReducer, * as fromSchema from './schema'
import usersReducer, * as fromUsers from './users'

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
    workout: workoutReducer,
    router: routerReducer,
    schema: schemaReducer,
})

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)
export const serverWorkout = state => fromWorkouts.workout(state.workout)

export const withAuth = (headers = {}) => (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
})

