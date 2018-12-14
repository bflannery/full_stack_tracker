import { createSelector } from 'reselect'
import _ from 'lodash'
import { SIDE_BAR_ITEMS } from'./static'
export const getCurrentRoute = state => state.router.location.pathname


export const getSideBarItems = createSelector(
  getCurrentRoute,
  route => {
    if (!route || route === '/login') return {}
    return _.find(SIDE_BAR_ITEMS, link => link.route === route)
  }
)
