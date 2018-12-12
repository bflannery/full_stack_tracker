import moment from 'moment'

export const ACTION_PATH = '@@HOME'
export const EDIT_START_DATE = `${ACTION_PATH}/EDIT_START_DATE`
export const EDIT_END_DATE = `${ACTION_PATH}/EDIT_END_DATE`
export const SET_ACTIVE_CHART =  `${ACTION_PATH}_SET_ACTIVE_CHART`


export const DEFAULT_STATE = {
  activeChart: 'dashboard',
  chartOptions: {
    startDate: moment().subtract(1, 'years'),
    endDate: moment()
  },
}
