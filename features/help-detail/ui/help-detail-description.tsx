import { ReactNode } from 'react';

import { Text } from '@/shared/ui';

function HelpDetailDescription({
  title,
  children,
}: {
  title: string;
  children: ReactNode | null;
}) {
  if (!children) {
    return null;
  }

  return (
    <div className='flex flex-col gap-1'>
      <Text className='text-main-green-900' typography='subtitle-1'>
        {title}
      </Text>
      <Text typography='body-9' className='text-gray-black'>
        {children}
      </Text>
    </div>
  );
}

export { HelpDetailDescription };
