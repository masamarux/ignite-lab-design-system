import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({children, asChild = false, className, ...rest}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return(
    <Comp 
      className={
        clsx('font-sans py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white focus:outline-none',
        className)
      }
      {...rest}
    >
      {children}
    </Comp>
  )
}