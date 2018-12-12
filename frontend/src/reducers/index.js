import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { routerReducer } from 'react-router-redux'
import authReducer, * as fromAuth from './auth'
import chartsReducer, * as fromCharts from './charts'
import workoutReducer, * as fromWorkouts from './workouts'
import schemaReducer, * as fromSchema from './schema'
import usersReducer, * as fromUsers from './users'
import appReducer from '../app/index'

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  charts: chartsReducer,
  users: usersReducer,
  workouts: workoutReducer,
  schema: schemaReducer,
  router: routerReducer,
})

export const rootEpic = combineEpics()

// From Auth
export const isAuthenticated = state => fromAuth.isAuthenticated(state)
export const accessToken = state => fromAuth.accessToken(state)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state)
export const refreshToken = state => fromAuth.refreshToken(state)
export const authAPIErrors = state => fromAuth.authAPIErrors(state)

// From Workouts
export const getWorkoutAPIError = state => fromWorkouts.getWorkoutAPIError(state)
export const getNewWorkout = state => fromWorkouts.getNewWorkout(state)

// From Users
export const getUsersAPIErrors = state => fromUsers.getUsersAPIErrors(state)
export const lastUserCreated = state => fromUsers.lastUserCreated(state)

// From Charts
export const getStartDate = state => fromCharts.getStartDate(state)
export const getEndDate = state => fromCharts.getEndDate(state)
export const getActiveChart = state => fromCharts.getActiveChart(state)

// From Schema
export const getWorkoutsSchema = state => fromSchema.getWorkoutsSchema(state)
export const getUsersSchema = state => fromSchema.getUsersSchema(state)


export const getCurrentRoute = state => state.router.location.pathname
export const withAuth = (headers = {}) => (state) => ({
  ...headers,
  'Authorization': `Bearer ${accessToken(state)}`
})
