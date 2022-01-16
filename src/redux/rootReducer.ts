import { combineReducers } from '@reduxjs/toolkit'

import notificationsReducer from '@features/notifications/notification.slice'

export const rootReducer = combineReducers({
  notifications: notificationsReducer,
})
