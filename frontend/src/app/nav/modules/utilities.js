import { createSelector } from 'reselect'
import _ from 'lodash'
import { getCurrentRoute } from '../modules/selectors'
import { SIDE_BAR_LINKS } from '../modules/static'


export const getSideBarLinksSelector = createSelector(
  getCurrentRoute,
  (route => {
    console.log({SIDE_BAR_LINKS, route})
    return _.find(SIDE_BAR_LINKS, link => link.route === route)
  })
)
