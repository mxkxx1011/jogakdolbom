import { HTMLAttributes } from 'react';

import { cn } from '@/shared/util';

function ModalDescription({
  children,
  className,
  ...restProps
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-gray-400 caption-2', className)} {...restProps}>
      {children}
    </p>
  );
}

export { ModalDescription };
