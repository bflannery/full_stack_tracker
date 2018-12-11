import * as charts from '../static/charts'


// Reducers
export default (state=charts.DEFAULT_STATE, action) => {
  const { payload } = action
  switch(action.type) {
  case charts.EDIT_START_DATE: {
    return {
      ...state,
      startDate: payload
    }
  }
  case charts.EDIT_END_DATE: {
    return {
      ...state,
      endDate: payload
    }
  }
  case charts.SET_ACTIVE_CHART: {
    return {
      ...state,
      activeChart: payload
    }
  }
  default:
    return state
  }
}


// Selectors
export const getUI = (state) => state.charts
export const getActiveChart = (state) => getUI(state).activeChart
export const getStartDate = (state) => getUI(state).startDate
export const getEndDate = (state) => getUI(state).endDate

