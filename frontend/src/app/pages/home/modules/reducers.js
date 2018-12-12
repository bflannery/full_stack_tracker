import * as charts from './static'

export default (state = charts.DEFAULT_STATE, action) => {
  const {payload} = action
  switch (action.type) {
  case charts.EDIT_START_DATE: {
    return {...state, ...payload}
  }
  case charts.EDIT_END_DATE: {
    return {...state, ...payload}
  }
  case charts.SET_ACTIVE_CHART: {
    return {...state, ...payload}
  }
  default:
    return state
  }
}
