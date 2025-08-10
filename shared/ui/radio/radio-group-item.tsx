import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentProps } from 'react';

import { IconWhiteCircle } from '@/shared/asset';
import { cn } from '@/shared/util/index';

function RadioGroupItem({
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      className={cn(
        'data-[state=checked]:bg-main-green-700 cursor-pointer',

        // 기본 스타일
        'border-main-green-700 text-primary',
        'aspect-square size-4 shrink-0 rounded-full border shadow-xs',
        'transition-[color,box-shadow] outline-none',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot='radio-group-indicator'
        className='relative flex items-center justify-center'
      >
        <IconWhiteCircle
          width={6}
          height={6}
          className='absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2'
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroupItem };
