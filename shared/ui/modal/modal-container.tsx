import { ReactNode } from 'react';

function ModalContainer({ children }: { children: ReactNode }) {
  return (
    <div className='fixed w-1/2 p-7 z-modal left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white rounded-xl'>
      {children}
    </div>
  );
}

export { ModalContainer };
