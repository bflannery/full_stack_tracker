import { schema } from 'normalizr'

export const workout = new schema.Entity('workouts', { idAttribute: 'id'})

export const workoutsSchema = [workout]
