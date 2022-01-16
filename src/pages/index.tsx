import type { NextPage } from 'next'
import capitalize from 'lodash/capitalize'

import type { NotificationTypes } from '@features/notifications/components/NotificationItem'
import { addNotification } from '@features/notifications/notification.slice'
import { useAppDispatch } from '@redux/hooks'

import { Button } from '@app/core/components/elements/Button'

const buttons: NotificationTypes[] = ['success', 'error', 'warning', 'info']

const Home: NextPage = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-4 lg:flex-row">
        {buttons.map((button) => (
          <Button
            key={button}
            onClick={() =>
              dispatch(
                addNotification({
                  message: `This is an ${button} notification!`,
                  type: button,
                })
              )
            }
          >
            {capitalize(button)}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Home
