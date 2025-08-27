'use client';

import { useRouter } from 'next/navigation';

import { Help } from '@/entities/help/model/types';
import { IconPuzzle, IconTime } from '@/shared/asset';
import { Button, Profile, Text } from '@/shared/ui';
import { cn, diffMinutes, formatDate, getGuDong } from '@/shared/util';
import { getPieces } from '@/shared/util/get-pieces';

import { InfoItem } from './info-item';

interface Props {
  help: Help;
  colorType: 'white' | 'gray';
}

const helpTypeTextMap = {
  1: '등/하원 돌봄',
  2: '놀이 돌봄',
  3: '동행 돌봄',
  4: '기타 돌봄',
};

const hhmm = (iso: string) => iso.slice(11, 16);

function HelpItem({ help, colorType }: Props) {
  const router = useRouter();

  const { helpType, addressText, serviceDate, startTime, endTime, requester } =
    help;

  const { nickname, imageUrl, avgRating, reviewCount } = requester;

  const handleClick = () => {
    router.push(`/helps/${help.id}`);
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between py-4.5 border-b border-gray-500',
        colorType === 'white' ? 'bg-white' : 'bg-gray-50',
      )}
    >
      <div className='flex items-center gap-2.5'>
        <Profile imageUrl={imageUrl} />
        <div className='flex flex-col gap-2'>
          <Text typography='body-8'>{nickname}</Text>
          <div className='flex items-center gap-1 text-gray-700'>
            <Text as='span' typography='body-4'>
              리뷰 {reviewCount}개
            </Text>
            <Text as='span' typography='body-4'>
              ·
            </Text>
            <Text as='span' typography='body-4'>
              ★{avgRating}점
            </Text>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <Text typography='subtitle-1' className='text-main-green-800'>
          {helpTypeTextMap[helpType]}
        </Text>
        <Text typography='body-4' className='text-gray-600'>
          {getGuDong(addressText)}
        </Text>
        <Text typography='caption-2' className='text-gray-600'>
          {formatDate(serviceDate)} ・{`${hhmm(startTime)} - ${hhmm(endTime)}`}
        </Text>
      </div>

      <div className='flex gap-4'>
        <InfoItem icon={<IconTime />}>
          {diffMinutes(startTime, endTime)}분
        </InfoItem>
        <InfoItem icon={<IconPuzzle />}>
          {getPieces(diffMinutes(startTime, endTime))}조각
        </InfoItem>
      </div>
      <Button onClick={handleClick} type='button' variant='detail'>
        상세보기
      </Button>
    </div>
  );
}

export { HelpItem };
