import { ComponentPropsWithoutRef, ReactNode } from 'react'

type Props = ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
  return (
    <button
      className="px-4 py-2 font-semibold rounded border bg-purple-3 border-purple-7 hover:bg-purple-4 active:bg-purple-5 hover:border-purple-8 transition-colors"
      {...props}
    />
  )
}
