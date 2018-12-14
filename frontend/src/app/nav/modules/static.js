export const HOME_NAV_ITEMS = {
  route: '/',
  navItems: [
    {
      id: 0,
      key: 'dashboard',
      label: 'Dashboard'
    },
    {
      id: 1,
      key: 'workoutCals',
      label: 'Calories Per Workout'
    },
    {
      id: 2,
      key: 'workoutTime',
      label: 'Workout Duration'
    },
    {
      id: 3,
      key: 'workoutMonth',
      label: 'Workout Types'
    }, {
      id: 4,
      key: 'workoutTypes',
      label: 'Workouts Per Month'
    },
  ]
}

export const WORKOUTS_PAGE_ITEMS = {
  route: '/workouts',
  navItems: [
    {
      id: 0,
      key: 'addWorkout',
      label: 'Add New Workout'
    },
  ]
}


export const SIDE_BAR_ITEMS = [HOME_NAV_ITEMS, WORKOUTS_PAGE_ITEMS]
