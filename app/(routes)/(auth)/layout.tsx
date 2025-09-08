import type { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='pt-36 lg:pt-48 lg:mx-auto flex flex-col items-center justify-center'>
      {children}
    </main>
  );
}

export default Layout;
