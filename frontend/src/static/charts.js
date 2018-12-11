import moment from 'moment'


export const EDIT_START_DATE = '@@charts/EDIT_START_DATE'
export const EDIT_END_DATE = '@@charts/EDIT_END_DATE'
export const SET_ACTIVE_CHART = '@@charts/SET_ACTIVE_CHART'


export const DEFAULT_STATE = {
  activeChart: 'dashboard',
  startDate: moment().subtract(1, 'years'),
  endDate: moment()
}
