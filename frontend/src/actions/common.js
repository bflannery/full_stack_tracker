import {
  EDIT_START_DATE,
  EDIT_END_DATE
} from '../static/charts'

  
export const onEndDateChangeAction = dateChange => ({
  type: EDIT_END_DATE,
  payload: dateChange
})

export const onStartDateChangeAction = dateChange => ({
  type: EDIT_START_DATE,
  payload: dateChange
})