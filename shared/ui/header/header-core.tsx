import { type ReactNode } from 'react';

interface Props {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

function HeaderCore({ left, center, right }: Props) {
  return (
    <header className='fixed top-0 left-0 right-0 z-(--z-fixed) py-4 bg-white h-20 flex items-center'>
      <section className='flex items-center justify-between w-300 mx-auto'>
        <div className='w-32 h-8 relative'>{left}</div>
        <div>{center}</div>
        <div>{right}</div>
      </section>
    </header>
  );
}

export { HeaderCore };
