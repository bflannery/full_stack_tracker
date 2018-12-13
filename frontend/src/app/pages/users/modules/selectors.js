export const getUsersState = state => state.users
export const getUsersAPIErrors = state => getUsersState(state).usersAPIError
export const lastUserCreated = state => getUsersState(state).lastUserCreated
