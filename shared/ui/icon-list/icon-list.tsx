import { ReactNode } from 'react';

function IconList({ children }: { children: ReactNode }) {
  return <div className='flex items-center gap-8'>{children}</div>;
}

export { IconList };
