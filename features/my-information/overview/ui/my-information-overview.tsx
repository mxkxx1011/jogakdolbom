'use client';

import { useGetMyInformationQuery } from '@/entities/me/model';
import { Button, RatingStat } from '@/shared/ui';

function MyInformationOverview() {
  const { data: myInformation, isLoading } = useGetMyInformationQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!myInformation) {
    return null;
  }

  const { user, stats } = myInformation;

  return (
    <div className='flex bg-white rounded-2xl border border-gray-200'>
      <div className='flex flex-1 items-center justify-between py-6.5 px-11 border-r border-gray-200'>
        <RatingStat
          hasArrow
          type='token'
          stat={user.tokenBalance}
          size='lg'
          color='black'
          align='start'
        />
        <Button variant='detail'>사용 내역</Button>
      </div>
      <div className='flex items-center justify-center px-14 border-r border-gray-200'>
        <RatingStat
          hasArrow
          type='rating'
          stat={stats.avgRating}
          size='lg'
          color='black'
          align='start'
        />
      </div>
      <div className='flex items-center justify-center px-14'>
        <RatingStat
          hasArrow
          type='review'
          stat={stats.reviewCount}
          size='lg'
          color='black'
          align='start'
        />
      </div>
    </div>
  );
}

export { MyInformationOverview };
