import { HTMLAttributes } from 'react';

function ModalTitle({
  children,
  ...restProps
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className='text-main-green-900 subtitle-3' {...restProps}>
      {children}
    </h2>
  );
}

export { ModalTitle };
