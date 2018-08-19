import moment from 'moment'


export const EDIT_START_DATE = '@@charts/EDIT_START_DATE'
export const EDIT_END_DATE = '@@charts/EDIT_END_DATE'


export const DEFAULT_STATE = {
  chart: '',
  startDate: moment().subtract(7, 'days'),
  endDate: moment()
}
