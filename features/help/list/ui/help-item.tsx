'use client';

import { useRouter } from 'next/navigation';

import { Help, HelperReviewInfo, HelpTypeToText } from '@/entities/help';
import { IconPuzzle, IconTime } from '@/shared/asset';
import { Button, Profile, Text } from '@/shared/ui';
import {
  cn,
  formatDate,
  getGuDong,
  getPieces,
  getTimeRange,
} from '@/shared/util';

import { InfoItem } from './info-item';

interface Props {
  help: Help;
  colorType: 'white' | 'gray';
}

function HelpItem({ help, colorType }: Props) {
  const router = useRouter();

  const {
    helpType,
    addressText,
    serviceDate,
    startTime,
    endTime,
    requester,
    durationMinutes,
  } = help;

  const { nickname, imageUrl, avgRating, reviewCount } = requester;

  const handleClick = () => {
    router.push(`/helps/${help.id}`);
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between py-4.5 px-15 border-b border-gray-300',
        colorType === 'white' ? 'bg-white' : 'bg-gray-50',
      )}
    >
      <Profile
        name={nickname}
        imageUrl={imageUrl}
        bottomItem={
          <HelperReviewInfo reviewCount={reviewCount} avgRating={avgRating} />
        }
      />

      <div className='flex flex-col gap-1'>
        <Text typography='subtitle-1' className='text-main-green-800'>
          {HelpTypeToText(helpType)}
        </Text>
        <Text typography='body-4' className='text-gray-600'>
          {getGuDong({ address: addressText })}
        </Text>
        <Text typography='caption-2' className='text-gray-600'>
          {/* TODO 하나의 컴포넌트화 */}
          {formatDate(serviceDate)} ・{getTimeRange(startTime, endTime)}
        </Text>
      </div>

      <div className='flex gap-4'>
        <InfoItem icon={<IconTime width={24} height={24} />}>
          {durationMinutes}분
        </InfoItem>
        <InfoItem icon={<IconPuzzle />}>
          {getPieces(durationMinutes)}조각
        </InfoItem>
      </div>
      <Button onClick={handleClick} type='button' variant='detail'>
        돌봄 상세보기
      </Button>
    </div>
  );
}

export { HelpItem };
