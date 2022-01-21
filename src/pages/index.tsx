import * as Slider from '@radix-ui/react-slider'
import capitalize from 'lodash/capitalize'
import type { NextPage } from 'next'
import { useState } from 'react'

import type { NotificationPositions } from '@features/notifications/notification.slice'
import type { NotificationTypes } from '@features/notifications/components/NotificationItem'
import {
  addNotification,
  setNotificationDuration,
  setNotificationPosition,
  useNotificationPosition,
} from '@features/notifications/notification.slice'
import { useAppDispatch } from '@redux/hooks'

import { Button, type ButtonTypes } from '@app/core/components/elements/Button'
import { useDebounce } from 'react-use'

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
  'top-left',
  'top',
  'top-right',
  'bottom-left',
  'bottom',
  'bottom-right',
]

const Home: NextPage = () => {
  const [duration, setDuration] = useState<number>(6000)
  const dispatch = useAppDispatch()
  const position = useNotificationPosition()

  // Commit duration to Notification Redux slice debounced 300ms
  useDebounce(() => dispatch(setNotificationDuration(duration)), 300, [
    duration,
  ])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h1 className="text-2xl text-3xl font-bold">Notifications demo</h1>
      </div>

      <div className="flex flex-col items-center mt-10 w-full lg:mt-28">
        <span>Position: {position}</span>

        <div className="grid grid-cols-2 gap-3 mt-6 md:gap-4 md:grid-cols-3 lg:flex-row">
          {positions.map((position) => (
            <Button
              key={position}
              variant="ghost"
              onClick={() => dispatch(setNotificationPosition(position))}
            >
              {capitalize(position)}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center px-8 mt-10 w-full max-w-prose lg:mt-20">
        <span>Auto hide duration: {duration}ms</span>

        <Slider.Root
          value={[duration / 100]}
          step={1}
          min={10}
          onValueChange={(value) => {
            const [duration] = value
            setDuration(duration * 100)
          }}
          className="relative flex items-center select-none touch-none w-full md:w-[400px] h-[20px] mt-6"
        >
          <Slider.Track className="relative rounded-full bg-purple-3 grow h-[3px]">
            <Slider.Range className="absolute h-full rounded-full bg-purple-9" />
          </Slider.Track>

          <Slider.Thumb className="block w-5 h-5 bg-white rounded-full shadow outline-none hover:bg-purple-12 focus:ring ring-purple-7" />
        </Slider.Root>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-16 md:grid-cols-4 md:gap-4 lg:flex-row lg:mt-32">
        {buttons.map(({ button, notification }, i) => (
          <Button
            key={i}
            variant={button}
            onClick={() =>
              dispatch(
                addNotification({
                  message: `Hello from ${notification} notification!`,
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
