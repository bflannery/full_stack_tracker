import {
  EDIT_START_DATE,
  EDIT_END_DATE,
  SET_ACTIVE_CHART
} from '../static/charts'


export const onEndDateChangeAction = dateChange => ({
  type: EDIT_END_DATE,
  payload: dateChange
})

export const onStartDateChangeAction = dateChange => ({
  type: EDIT_START_DATE,
  payload: dateChange
})

export const setActiveChartAction = chartId => ({
  type: SET_ACTIVE_CHART,
  payload: chartId
})
