import { HTMLAttributes } from 'react';

import { IconClose } from '@/shared/asset';

import { useModalStore } from './use-modal-store';

function ModalCloseWrapper({
  children,
  ...restProps
}: HTMLAttributes<HTMLButtonElement>) {
  const { closeModal } = useModalStore();

  return (
    <div className='relative'>
      <button
        onClick={closeModal}
        className='absolute top-0 right-0'
        {...restProps}
      >
        <IconClose />
      </button>
      {children}
    </div>
  );
}

export { ModalCloseWrapper };
