import { schema } from 'normalizr'

export const user = new schema.Entity('users', { idAttribute: 'id'})

export const usersSchema = [user]

export const USERS_POST_REQUEST = '@@workout/USERS_POST_REQUEST'
export const USERS_POST_SUCCESS = '@@workout/USERS_POST_SUCCESS'
export const USERS_POST_FAILURE = '@@workout/USERS_POST_FAILURE'

export const USERS_GET_REQUEST = '@@workout/USERS_GET_REQUEST'
export const USERS_GET_SUCCESS = '@@workout/USERS_GET_SUCCESS'
export const USERS_GET_FAILURE = '@@workout/USERS_GET_FAILURE'

