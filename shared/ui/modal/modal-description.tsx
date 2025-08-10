import { HTMLAttributes } from 'react';

function ModalDescription({
  children,
  ...restProps
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className='text-gray-400 caption-2' {...restProps}>
      {children}
    </p>
  );
}

export { ModalDescription };
