import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/util';

import type { ElementType, ComponentPropsWithoutRef } from 'react';

const textVariants = cva('', {
  variants: {
    typography: {
      'home-title-1': 'home-title-1',
      'home-title-2': 'home-title-2',
      'headline-1': 'headline-1',
      'headline-2': 'headline-2',
      'subtitle-0': 'subtitle-0',
      'subtitle-0-1': 'subtitle-0-1',
      'subtitle-1': 'subtitle-1',
      'subtitle-2': 'subtitle-2',
      'subtitle-3': 'subtitle-3',
      'body-0': 'body-0',
      'body-1': 'body-1',
      'body-2': 'body-2',
      'body-3': 'body-3',
      'body-4': 'body-4',
      'body-5': 'body-5',
      'body-6': 'body-6',
      'body-7': 'body-7',
      'body-8': 'body-8',
      'body-9': 'body-9',
      'caption-1': 'caption-1',
      'caption-2': 'caption-2',
    },
    isSrOnly: {
      true: 'sr-only',
      false: '',
    },
  },
  defaultVariants: {
    typography: 'body-0',
    isSrOnly: false,
  },
});

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
