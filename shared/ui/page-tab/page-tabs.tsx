import { HTMLAttributes } from 'react';

import { cn } from '@/shared/util';

function PageTabs({
  children,
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-center gap-10 md:gap-20', className)}
      {...restProps}
    >
      {children}
    </div>
  );
}

export { PageTabs };
