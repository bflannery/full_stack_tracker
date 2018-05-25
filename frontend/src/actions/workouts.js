import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const WORKOUTS_REQUEST = '@@workout/WORKOUTS_REQUEST';
export const WORKOUTS_SUCCESS = '@@workout/WORKOUTS_SUCCESS';
export const WORKOUTS_FAILURE = '@@workout/WORKOUTS_FAILURE';

export const postWorkoutsAPI = (workout) => ({
    [RSAA]: {
        endpoint: '/api/fitness/workouts/',
        method: 'POST',
        body: JSON.stringify(workout),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            WORKOUTS_REQUEST, WORKOUTS_SUCCESS, WORKOUTS_FAILURE
        ]
    }
})