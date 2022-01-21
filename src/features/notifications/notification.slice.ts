import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import type { Notification } from '@features/notifications/components/NotificationItem'
import type { RootState } from '@redux/store'
import { useAppSelector } from '@redux/hooks'

export type NotificationPositions =
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left'

type NotificationsState = {
  notifications: Notification[]
  position: NotificationPositions
  autoHideDuration: number
}

const initialState: NotificationsState = {
  notifications: [],
  position: 'top-right',
  autoHideDuration: 6000,
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (
      state,
      { payload }: PayloadAction<Omit<Notification, 'id'>>
    ) => {
      const notification: Notification = {
        id: nanoid(),
        ...payload,
      }

      state.notifications.push(notification)
    },
    dismissNotification: (
      state,
      { payload }: PayloadAction<Notification['id']>
    ) => {
      const index = state.notifications.findIndex(
        (notification) => notification.id === payload
      )

      if (index !== -1) {
        state.notifications.splice(index, 1)
      }
    },
    setNotificationPosition: (
      state,
      { payload }: PayloadAction<NotificationsState['position']>
    ) => {
      state.position = payload
    },
    setNotificationDuration: (
      state,
      { payload }: PayloadAction<NotificationsState['autoHideDuration']>
    ) => {
      state.autoHideDuration = payload
    },
  },
})

const { reducer, actions } = notificationsSlice

export const {
  addNotification,
  dismissNotification,
  setNotificationPosition,
  setNotificationDuration,
} = actions

// Selectors
const selectNotifications = (state: RootState) =>
  state.notifications.notifications

const selectNotificationPosition = (state: RootState) =>
  state.notifications.position

const selectNotificationDuration = (state: RootState) =>
  state.notifications.autoHideDuration

// Hooks
export const useNotificationPosition = () =>
  useAppSelector(selectNotificationPosition)

export const useNotificationDuration = () =>
  useAppSelector(selectNotificationDuration)

export const useNotifications = () => useAppSelector(selectNotifications)

export default reducer
