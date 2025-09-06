import { IconArrow } from '@/shared/asset';

import { cn } from '@/shared/util';
import { Text, TypographyType } from '../text';

const StatTitle = {
  rating: '별점',
  review: '리뷰',
  token: '보유 조각',
};

interface Props {
  type: keyof typeof StatTitle;
  hasArrow?: boolean;
  onArrowClick?: () => void;
  align?: 'start' | 'center' | 'end';
  size?: 'sm' | 'lg';
  color?: 'black' | 'green';
  stat: number;
}

const Sizes: {
  statTitleSize: Record<'sm' | 'lg', TypographyType>;
  statSize: Record<'sm' | 'lg', TypographyType>;
} = {
  statTitleSize: {
    sm: 'caption-1',
    lg: 'body-3',
  },
  statSize: {
    sm: 'body-0',
    lg: 'headline-2',
  },
};

const Colors = {
  black: 'text-black fill-black',
  green: 'text-main-green-900 fill-main-green-900',
};

function RatingStat({
  type,
  hasArrow,
  stat,
  onArrowClick,
  align = 'end',
  size = 'sm',
  color = 'green',
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1',
        align === 'start' && 'items-start',
        align === 'center' && 'items-center',
        align === 'end' && 'items-end',
      )}
    >
      <div className={cn('flex items-center gap-2', Colors[color])}>
        <Text as='span' typography={Sizes.statTitleSize[size]}>
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
      <Text
        as='span'
        typography={Sizes.statSize[size]}
        className={Colors[color]}
      >
        {stat}
      </Text>
    </div>
  );
}

export { RatingStat };
