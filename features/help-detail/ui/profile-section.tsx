import { HelpRequester } from '@/entities/help/model/types';
import { Profile, RatingStat } from '@/shared/ui';

function ProfileSection({ user }: { user: HelpRequester }) {
  const { nickname, imageUrl, avgRating, reviewCount } = user;

  return (
    <div className='flex items-center justify-between mt-2.5'>
      <Profile name={nickname} imageUrl={imageUrl} bottomItem={null} />
      <div className='flex items-center gap-4'>
        <RatingStat type='rating' hasArrow stat={avgRating} />
        <RatingStat type='review' hasArrow stat={reviewCount} />
      </div>
    </div>
  );
}

export { ProfileSection };
