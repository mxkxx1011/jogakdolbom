import type { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='pt-48 mx-auto flex flex-col items-center'>{children}</main>
  );
}

export default Layout;
