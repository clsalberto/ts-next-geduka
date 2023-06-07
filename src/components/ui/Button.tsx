import { ButtonHTMLAttributes } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

const buttonStyles = cva(
  'flex items-center justify-center rounded focus:outline-none font-semibold',
  {
    variants: {
      intent: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-slate-400 text-slate-900 hover:bg-slate-500',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        success: 'bg-green-600 text-white hover:bg-green-700'
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        base: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
      },
      full: {
        true: 'w-full'
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'base'
    }
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button({
  intent,
  size,
  full,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonStyles({ intent, size, full })} {...props}>
      {children}
    </button>
  )
}
