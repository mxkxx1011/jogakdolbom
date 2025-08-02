import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/util/index';
import { ComponentProps } from 'react';

const baseButtonClass = cn(
  'py-3 max-h-11',

  // Layout & Display
  'cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0',

  // Sizing & Shape
  'rounded-full font-semibold text-lg -tracking-0-025',

  // Interaction States
  'transition-all disabled:pointer-events-none disabled:opacity-50',

  // Icon (svg) 관련 스타일
  '[&_svg]:pointer-events-none',
  '[&_svg]:shrink-0',
  "[&_svg:not([class*='size-'])]:size-4",

  // Focus & Ring
  'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',

  // Validation (에러) 상태
  'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
);

const buttonVariants = cva(baseButtonClass, {
  variants: {
    variant: {
      solid:
        'bg-main-green-300 text-main-green-900 hover:bg-main-green-500 active:bg-main-green-700 active:text-main-green-50 disabled:bg-gray-200 disabled:text-gray-600',
      outline:
        'border border-main-green-500 bg-main-green-50 text-main-green-500 hover:border-main-green-700 hover:text-main-green-700 active:border-main-green-950 active:text-main-green-950 disabled:bg-gray-50 disabled:border-gray-600 disabled:text-gray-600',
      destructive:
        'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      ghost:
        'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      sm: 'w-45 gap-1.5 ',
      lg: 'w-91 gap-1.5',
      full: 'w-full',
      icon: 'size-9',
      fit: 'w-fit',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'sm',
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
