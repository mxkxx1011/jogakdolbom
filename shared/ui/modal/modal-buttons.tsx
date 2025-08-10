import { HTMLAttributes } from 'react';

import { cn } from '@/shared/util';

function ModalButtons({
  children,
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex gap-2', className)} {...restProps}>
      {children}
    </div>
  );
}

export { ModalButtons };
