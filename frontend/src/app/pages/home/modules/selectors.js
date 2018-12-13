// Selectors
export const getUI = (state) => state.pages.home
export const getActiveChart = (state) => getUI(state).activeChart
export const getChartOptions = state => getUI(state).chartOptions
export const getStartDate = (state) => getChartOptions(state).startDate
export const getEndDate = (state) => getChartOptions(state).endDate

