import { ReviewRatingInfo } from '@/entities/user';
import { Button, Profile, Text } from '@/shared/ui';

import { HelpApplicantDetail } from '../model/types';

function HelpHistoryModalApplicantItem({
  applicant,
}: {
  applicant: HelpApplicantDetail;
}) {
  const { helper, message } = applicant;

  const { reviewCount, ratingAvg } = helper;
  return (
    <div className='flex items-center justify-between w-full py-4 px-7 rounded-lg border border-gray-200'>
      <Profile
        name={helper.nickname}
        imageUrl={helper.imageUrl}
        bottomItem={
          <div className='flex flex-col gap-1 text-gray-700'>
            <ReviewRatingInfo reviewCount={reviewCount} avgRating={ratingAvg} />
            <Text typography='caption-2'>{message}</Text>
          </div>
        }
      />
      <Button variant='detail'>수락하기</Button>
    </div>
  );
}

export { HelpHistoryModalApplicantItem };
