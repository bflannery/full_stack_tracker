import { EDIT_START_DATE, EDIT_END_DATE, SET_ACTIVE_CHART } from './static'
import { apiGetWorkouts } from '../../../api/workouts'

export const onEndDateChangeAction = endDate => ({
  type: EDIT_END_DATE,
  payload: { endDate }
})

export const onStartDateChangeAction = startDate => ({
  type: EDIT_START_DATE,
  payload: { startDate }
})

export const setActiveChartAction = activeChart => ({
  type: SET_ACTIVE_CHART,
  payload: { activeChart }
})


export const loadHomePageAction = () => dispatch => dispatch(apiGetWorkouts())
