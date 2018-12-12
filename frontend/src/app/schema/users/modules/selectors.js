export const getSchemaUI = (state) => state.schema
export const getWorkoutsSchema = (state) => getSchemaUI(state).workouts
export const getUsersSchema = (state) => getSchemaUI(state).users
