import { HTMLAttributes } from 'react';

import { cn } from '@/shared/util';

function ModalSectionTitle({
  children,
  className,
  ...restProps
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('body-0 text-main-green-900', className)} {...restProps}>
      {children}
    </h3>
  );
}

export { ModalSectionTitle };
