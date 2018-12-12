// Selectors
export const getUI = (state) => state.charts
export const getActiveChart = (state) => getUI(state).activeChart
export const getStartDate = (state) => getUI(state).startDate
export const getEndDate = (state) => getUI(state).endDate

