import { ReactNode } from 'react';

import { Text } from '@/shared/ui';

interface Props {
  icon: ReactNode;
  children: ReactNode;
}

function InfoText({ icon, children }: Props) {
  return (
    <div className='flex items-center gap-1.5'>
      {icon}
      <Text as='span' typography='body-0' className='text-black'>
        {children}
      </Text>
    </div>
  );
}

export { InfoText };
