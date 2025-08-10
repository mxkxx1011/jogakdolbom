'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';

import { IconDropdownArrow } from '@/shared/asset';
import { cn } from '@/shared/util';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const DropdownButton = forwardRef<HTMLButtonElement, Props>(
  function DropdownButton({ children, className, ...rest }, ref) {
    return (
      <button
        ref={ref}
        className={cn(
          'group',
          'body-1 text-black border border-main-green-700 py-3 px-5 rounded-lg aria-invalid:border-point-red',
          'data-[state=open]:text-gray-600',
          'flex items-center justify-between w-[22.125rem]',
          className,
        )}
        {...rest}
      >
        {children}
        <IconDropdownArrow
          className={cn(
            'ml-2 transition-transform duration-200',
            'group-data-[state=open]:rotate-180', // ← 부모(open) 기준으로 회전
          )}
        />
      </button>
    );
  },
);

export { DropdownButton };
