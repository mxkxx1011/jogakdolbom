import { ReactNode } from 'react';

import { Text } from '@/shared/ui';

interface Props {
  icon: ReactNode;
  children: ReactNode;
}
function InfoItem({ icon, children }: Props) {
  return (
    <div className='w-9 flex flex-col items-center gap-1.5 text-main-green-800 fill-main-green-800'>
      {icon}{' '}
      <Text as='span' typography='body-4' className='whitespace-nowrap'>
        {children}
      </Text>
    </div>
  );
}

export { InfoItem };
