import type { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-warm-white'>
      <div className='mt-20 w-300 mx-auto min-h-[calc(100vh-80px)] h-full pb-20'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
