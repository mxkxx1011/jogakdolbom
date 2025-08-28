import { type ReactNode } from 'react';

import { cn } from '@/shared/util';

import { Text } from '../text';

import { ProfileImage } from './profile-image';

interface Props {
  name: string;
  imageUrl: string | null;
  bottomItem: ReactNode | null;
  rightClassName?: string;
}

function Profile({ name, imageUrl, bottomItem, rightClassName }: Props) {
  return (
    <div className='flex items-center gap-2.5'>
      <ProfileImage imageUrl={imageUrl} />
      <div className={cn('flex flex-col gap-0.5', rightClassName)}>
        <Text typography='body-8' className='text-main-green-900'>
          {name}
        </Text>
        {bottomItem}
      </div>
    </div>
  );
}

export { Profile };
