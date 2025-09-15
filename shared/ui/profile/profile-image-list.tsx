import { HelpApplicant } from '@/entities/help/model/types';
import { cn } from '@/shared/util';

import { ProfileImage } from './profile-image';

function ProfileImageList({ userList }: { userList: HelpApplicant[] }) {
  const count = userList.length;

  if (count === 0) {
    return null;
  }

  const showUsers = userList.slice(0, 2); // 앞에서 2명만
  const extraCount = count > 2 ? count - 2 : 0;

  return (
    <div className='flex'>
      {showUsers.map((user, idx) => (
        <ProfileImage
          size={40}
          key={user.helperId}
          imageUrl={user.imageUrl}
          className={cn('ring-2 ring-white relative', `left-[${idx * -10}px]`)}
        />
      ))}

      {extraCount > 0 && (
        <div className='size-10 rounded-full bg-main-green-900 flex items-center justify-center body-2 text-white ring-2 ring-white'>
          +{extraCount}
        </div>
      )}
    </div>
  );
}

export { ProfileImageList };
