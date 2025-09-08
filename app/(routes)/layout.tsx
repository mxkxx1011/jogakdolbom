import type { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-warm-white px-4 md:px-6 lg:px-8'>
      <div className='mt-20 lg:w-300 mx-auto min-h-[calc(100vh-80px)] h-full pb-20'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
