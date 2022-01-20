import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

export type ButtonTypes = 'default' | 'danger' | 'warning' | 'success' | 'ghost'

type Props = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonTypes
}

const buttonStyleVariants: Record<ButtonTypes, string> = {
  success:
    'bg-green-3 border-green-7 hover:bg-green-4 active:bg-green-5 hover:border-green-8',
  danger:
    'bg-red-3 border-red-7 hover:bg-red-4 active:bg-red-5 hover:border-red-8',
  default:
    'bg-purple-3 border-purple-7 hover:bg-purple-4 active:bg-purple-5 hover:border-purple-8',
  warning:
    'bg-yellow-3 border-yellow-7 hover:bg-yellow-4 active:bg-yellow-5 hover:border-yellow-8',
  ghost: 'hover:bg-gray-4 border-gray-7 hover:border-gray-8',
}

export const Button = ({ variant = 'default', ...rest }: Props) => {
  return (
    <button
      className={clsx(
        'min-w-[140px] px-4 py-2 font-semibold rounded border transition-colors',
        buttonStyleVariants[variant]
      )}
      {...rest}
    />
  )
}
