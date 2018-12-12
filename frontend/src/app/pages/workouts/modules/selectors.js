// Selectors
export const getUI = (state) => state.workouts
export const getWorkoutAPIError = (state) => getUI(state).workoutAPIError
export const getNewWorkout = (state) => getUI(state).newWorkout
