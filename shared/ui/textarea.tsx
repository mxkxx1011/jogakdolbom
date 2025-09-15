import { ComponentProps } from 'react';

import { cn } from '@/shared/util';

function Textarea({
  className,
  readOnly,
  ...restProps
}: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        // Base styles
        'flex w-full min-w-0 rounded-md transition-[color,box-shadow] resize-none',
        'min-h-16 field-sizing-content',
        // Background and text
        'bg-white text-main-green-800 font-medium text-sm -tracking-0-025',
        // Border and outline
        'outline outline-main-green-500 border-0',
        // Padding
        'px-3 py-2.5',
        // Placeholder styles
        'placeholder:text-main-green-600 placeholder:font-normal',
        // Selection styles
        'selection:bg-main-green-900 selection:text-main-green-100',
        // Focus states
        'focus:text-main-green-800 focus:font-normal',
        // Active states
        'active:text-main-green-800',
        // Disabled states
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Invalid states
        'aria-invalid:text-point-red aria-invalid:outline-point-red',
        readOnly &&
          'outline-gray-200 bg-gray-50 text-gray-800 focus:text-gray-800 active:text-gray-800 focus:font-medium',
        className,
      )}
      {...restProps}
    />
  );
}

export { Textarea };
