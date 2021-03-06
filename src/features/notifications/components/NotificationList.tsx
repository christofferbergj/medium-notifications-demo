import * as Portal from '@radix-ui/react-portal'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import {
  NotificationPositions,
  useNotificationPosition,
} from '@features/notifications/notification.slice'

type Props = {
  children: ReactNode
}

const positions: Record<NotificationPositions, string> = {
  top: 'top-0 right-0 left-0 items-center',
  'top-right': 'top-0 right-0 items-end',
  'top-left': 'top-0 left-0 items-start',
  bottom: 'bottom-0 right-0 left-0 items-center',
  'bottom-right': 'bottom-0 right-0 items-end',
  'bottom-left': 'bottom-0 left-0 items-start',
}

export const NotificationList = ({ children }: Props) => {
  const position = useNotificationPosition()

  return (
    <Portal.Root>
      <AnimateSharedLayout>
        <ul
          aria-live="assertive"
          className={clsx(
            'flex fixed z-50 flex-col gap-4 m-4 lg:m-8 pointer-events-none',
            positions[position]
          )}
        >
          <AnimatePresence initial={false}>{children}</AnimatePresence>
        </ul>
      </AnimateSharedLayout>
    </Portal.Root>
  )
}
