'use client';
import { useUserStore } from '@/entities/user/model';
import { Profile, Text } from '@/shared/ui';

function MyInformation() {
  const { user } = useUserStore();

  if (!user) {
    return null;
  }

  const { nickname, imageUrl, region } = user;

  return (
    <div className='flex flex-col gap-5'>
      <Text typography='headline-2' className='text-main-green-900'>
        내 정보
      </Text>
      <Profile
        name={nickname}
        imageUrl={imageUrl}
        bottomItem={
          region ? (
            <Text typography='body-4' className='text-gray-500'>
              서울특별시 동대문구 휘경동
            </Text>
          ) : (
            <Text typography='body-4' className='text-gray-400'>
              지역을 선택해주세요!
            </Text>
          )
        }
      />
    </div>
  );
}

export { MyInformation };
