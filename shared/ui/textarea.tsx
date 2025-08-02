import { ComponentProps } from 'react';

import { cn } from '@/shared';

function Textarea({ className, ...restProps }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        // Base styles
        'flex w-full min-w-0 rounded-md transition-[color,box-shadow] resize-none',
        'min-h-16 field-sizing-content',
        // Background and text
        'bg-main-green-50 text-main-green-800 font-medium text-sm -tracking-0-025',
        // Border and outline
        'outline outline-main-green-500 border-0',
        // Padding
        'px-3 py-2.5',
        // Placeholder styles
        'placeholder:text-main-green-500 placeholder:font-normal',
        // Selection styles
        'selection:bg-main-green-900 selection:text-main-green-100',
        // Focus states
        'focus:text-main-green-600 focus:font-normal',
        // Active states
        'active:text-main-green-800',
        // Disabled states
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Invalid states
        'aria-invalid:text-point-red aria-invalid:outline-point-red',
        className,
      )}
      {...restProps}
    />
  );
}

export { Textarea };
