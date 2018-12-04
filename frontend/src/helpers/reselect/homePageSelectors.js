import { createSelector } from 'reselect'
import moment from 'moment'
import {
  getWorkoutsSchema,
  getStartDate,
  getEndDate,
} from '../../reducers/index'


// Utilities

export const formatWorkoutMonth = workout => moment(workout.creationDate).format('MMMM')

export const getFilteredWorkoutsPerMonth = (workouts, month) => (
  _.filter(workouts, workout => _.isEqual(formatWorkoutMonth(workout), month))
)

export const getTotalCalsBurnedPerMonth = (workouts, month) => {
  const workoutsPerMonth = getFilteredWorkoutsPerMonth(workouts, month)
  return _.reduce(workoutsPerMonth, (curr, next) => (curr + next.totalEnergyBurned), 0)
}

// Selectors
export const getAllWorkoutsArray = createSelector(
  getWorkoutsSchema,
  workouts => !workouts ? [] : _.values(workouts)
)

export const getWorkoutsByDateRange = createSelector(
  getAllWorkoutsArray,
  getStartDate,
  getEndDate,
  (workouts, startDate, endDate) => {
    const filteredWorkouts = _.filter(workouts, workout => {
      const workoutDate = moment(workout.creationDate)
      return (
        workoutDate.isAfter(startDate) && workoutDate.isBefore(endDate)
        && workout.totalEnergyBurned < 1000
      )
    })
    return _.map(filteredWorkouts, workout => ({
      ...workout,
      creationDate: moment(workout.creationDate).format('MM-DD-YYYY')
    }))
  }
)

export const getWorkoutsPerMonth = createSelector(
  getWorkoutsByDateRange,
  (workouts) => {
    const months = _.uniq(_.map(workouts, workout => formatWorkoutMonth(workout)))
    return _.map(months, month => ({
      label: month,
      totalWorkouts: getFilteredWorkoutsPerMonth(workouts, month),
      totalCalsBurned: getTotalCalsBurnedPerMonth(workouts, month)
    }))
  }
)

export const getWorkoutTypes = createSelector(
  getWorkoutsByDateRange,
  (workouts) => {
    const workoutTypes = _.uniq(_.map(workouts, workout => workout.workoutActivityType))
    return _.map(workoutTypes, type => ({
      label: type,
      workouts: _.filter(workouts, workout => workout.workoutActivityType === type)
    }))
  }
)
