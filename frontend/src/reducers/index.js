import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer, * as fromAuth from './auth'
import workoutReducer, * as fromWorkouts from './workouts'
import schemaReducer, * as fromSchema from './schema'
import usersReducer, * as fromUsers from './users'

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
    workouts: workoutReducer,
    schema: schemaReducer,
    router: routerReducer,
})

// From Auth
export const isAuthenticated = state => fromAuth.isAuthenticated(state)
export const accessToken = state => fromAuth.accessToken(state)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state)
export const refreshToken = state => fromAuth.refreshToken(state)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state)
export const authAPIErrors = state => fromAuth.authAPIErrors(state)

// From Workouts
export const getWorkoutAPIError = state => fromWorkouts.getWorkoutAPIError(state)

// From Users
export const getUsersAPIErrors = state => fromUsers.getUsersAPIErrors(state)
export const lastUserCreated = state => fromUsers.lastUserCreated(state)

// From Schema
export const getWorkoutsSchema = state => fromSchema.getWorkoutsSchema(state)
export const getUsersSchema = state => fromSchema.getUsersSchema(state)

export const withAuth = (headers = {}) => (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
})
