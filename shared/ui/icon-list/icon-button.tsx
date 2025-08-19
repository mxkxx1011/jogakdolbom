import { ButtonHTMLAttributes } from 'react';

import { cn } from '../../util';
import { Button } from '../button';

function IconButton({
  children,
  className,
  onClick,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      variant='ghost'
      size='icon'
      className={cn('', className)}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </Button>
  );
}

export { IconButton };
