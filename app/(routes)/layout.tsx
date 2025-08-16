import type { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-main-green-50'>
      <div className='mt-20 w-300 mx-auto h-[calc(100vh-80px)]'>{children}</div>
    </div>
  );
}

export { Layout };
