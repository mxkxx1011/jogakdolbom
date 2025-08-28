import { IconArrow } from '@/shared/asset';

import { Text } from '../text';

const StatTitle = {
  rating: '별점',
  review: '리뷰',
};

interface Props {
  type: keyof typeof StatTitle;
  hasArrow?: boolean;
  onArrowClick?: () => void;
  stat: number;
}

function RatingStat({ type, hasArrow, stat, onArrowClick }: Props) {
  return (
    <div className='flex flex-col gap-1  items-end'>
      <div className='flex items-center gap-2'>
        <Text as='span' typography='caption-1' className='text-gray-900'>
          {StatTitle[type]}
        </Text>
        {hasArrow && (
          <button
            type='button'
            aria-label={`${StatTitle[type]} 확인`}
            onClick={onArrowClick}
          >
            <IconArrow />
          </button>
        )}
      </div>
      <Text as='span' typography='body-0' className='text-main-green-900'>
        {stat}
      </Text>
    </div>
  );
}

export { RatingStat };
