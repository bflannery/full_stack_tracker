import {
  DEFAULT_STATE,
  EDIT_START_DATE,
  EDIT_END_DATE,
  SET_ACTIVE_CHART,
} from './static'

export default (state = DEFAULT_STATE, action) => {
  const {payload} = action
  switch (action.type) {
  case EDIT_START_DATE: {
    return {...state, ...payload}
  }
  case EDIT_END_DATE: {
    return {...state, ...payload}
  }
  case SET_ACTIVE_CHART: {
    return {...state, ...payload}
  }
  default:
    return state
  }
}
