'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/shared/util/index';
import { IconCheck } from '../asset/icon';
import { ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const baseCheckboxStyle = `
  cursor-pointer 
  data-[state=checked]:bg-main-green-700 data-[state=checked]:border-main-green-700
  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
  shrink-0 rounded-[4px] border border-main-green-700
  transition-shadow outline-none
  disabled:cursor-not-allowed disabled:opacity-50
`;

const checkboxVariants = cva(baseCheckboxStyle, {
  variants: {
    size: {
      sm: 'size-4', // 기본값
      md: 'size-5',
      lg: 'size-6',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>;

function Checkbox({ className, size, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='flex items-center justify-center text-current transition-none'
      >
        <IconCheck />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
