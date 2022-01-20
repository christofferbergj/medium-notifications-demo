import capitalize from 'lodash/capitalize'
import type { NextPage } from 'next'
import { useState } from 'react'

import type {
  NotificationPositions,
  NotificationTypes,
} from '@features/notifications/components/NotificationItem'
import { addNotification } from '@features/notifications/notification.slice'
import { useAppDispatch } from '@redux/hooks'

import { Button, type ButtonTypes } from '@app/core/components/elements/Button'

const buttons: {
  button: Partial<ButtonTypes>
  notification: NotificationTypes
}[] = [
  {
    notification: 'success',
    button: 'success',
  },
  {
    notification: 'warning',
    button: 'warning',
  },
  {
    notification: 'error',
    button: 'danger',
  },
  {
    notification: 'info',
    button: 'default',
  },
]
const positions: NotificationPositions[] = [
  'top',
  'top-right',
  'top-left',
  'bottom',
  'bottom-right',
  'bottom-left',
]

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const [position, setPosition] = useState<NotificationPositions>('top-right')

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h1 className="text-2xl text-3xl font-bold">Notifications demo</h1>
      </div>

      <div className="flex flex-col items-center mt-10 lg:mt-32">
        <span>Active position: {position}</span>

        <div className="flex flex-col gap-4 lg:flex-row mt-6">
          {positions.map((position) => (
            <Button
              key={position}
              variant="ghost"
              onClick={() => setPosition(position)}
            >
              {capitalize(position)}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-10 lg:flex-row lg:mt-32">
        {buttons.map(({ button, notification }, i) => (
          <Button
            key={i}
            variant={button}
            onClick={() =>
              dispatch(
                addNotification({
                  message: `This is an ${notification} notification!`,
                  type: notification,
                })
              )
            }
          >
            {capitalize(notification)}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Home
