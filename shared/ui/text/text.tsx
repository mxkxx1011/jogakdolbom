import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/util';

import { textVariants } from './types';

import type { ElementType, ComponentPropsWithoutRef } from 'react';

type Props<T extends ElementType = 'p'> = VariantProps<typeof textVariants> & {
  as?: T;
  className?: string;
} & Omit<
    ComponentPropsWithoutRef<T>,
    'className' | keyof VariantProps<typeof textVariants>
  >;

function Text<T extends ElementType = 'p'>({
  as,
  typography,
  children,
  className,
  isSrOnly,
  ...restProps
}: Props<T>) {
  const Element = as || 'p';

  return (
    <Element
      className={cn(textVariants({ typography, isSrOnly }), className)}
      {...restProps}
    >
      {children}
    </Element>
  );
}

export { Text };
