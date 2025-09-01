import Image from 'next/image';

import { cn } from '@/shared/util';

function ProfileImage({
  imageUrl,
  size = 44,
  className,
}: {
  imageUrl: string | null;
  size?: number;
  className?: string;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn('relative rounded-full overflow-hidden', className)}
    >
      <Image
        src={imageUrl || '/images/user_profile_circle.png'}
        alt='profile'
        fill
        className='object-cover'
      />
    </div>
  );
}

export { ProfileImage };
