'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentProps } from 'react';

import { cn } from '@/shared/util/index';
function RadioGroup({
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      className={cn('grid gap-3', className)}
      {...props}
    />
  );
}

export { RadioGroup };
