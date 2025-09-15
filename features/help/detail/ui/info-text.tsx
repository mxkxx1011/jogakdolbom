import { ReactNode } from 'react';

import { Text, TypographyType } from '@/shared/ui';
import { cn } from '@/shared/util';

interface Props {
  icon: ReactNode;
  children: ReactNode;
  color?: 'green' | 'black';
  iconSize?: number;
  textSize?: TypographyType;
}

function InfoText({
  icon,
  children,
  color = 'black',
  iconSize = 24,
  textSize = 'body-0',
}: Props) {
  return (
    <div
      className={cn(
        'flex items-center gap-1.5',
        color === 'green' && 'text-main-green-900 fill-main-green-900',
        color === 'black' && 'text-black fill-black',
      )}
    >
      <div
        className='flex items-center justify-center'
        style={{ width: iconSize, height: iconSize }}
      >
        {icon}
      </div>
      <Text as='span' typography={textSize}>
        {children}
      </Text>
    </div>
  );
}

export { InfoText };
