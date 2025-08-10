import { HTMLAttributes } from 'react';

import { cn } from '@/shared/util';

function ModalSection({
  children,
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col gap-2.5', className)} {...restProps}>
      {children}
    </div>
  );
}

export { ModalSection };
