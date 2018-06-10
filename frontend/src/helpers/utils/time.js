import moment from 'moment'
import 'moment-duration-format'

export const convertMinutesToSeconds = ( durationInMinutes ) => (
  moment.duration(durationInMinutes).asSeconds()
)

export const convertSecondsToMinutes = ( durationInSeconds ) => (
  moment.duration(durationInSeconds, 'seconds').format('h:mm:ss')
)

export const formatDateTime = ( dateTime ) => (
  moment(dateTime).format('MM/DD/YYYY hh:mm:ss A')
)