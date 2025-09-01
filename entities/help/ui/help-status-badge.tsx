import { Text } from '@/shared/ui';
import { cn } from '@/shared/util';

import { HelpHistoryStatus } from '../model/types';

function HelpStatusBadge({
  status,
  size = 'lg',
  className,
}: {
  status: HelpHistoryStatus;
  size?: 'sm' | 'lg';
  className?: string;
}) {
  const label = status === 0 ? '모집 중' : '매칭 완료';

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded',
        size === 'sm' && 'w-15 py-1',
        size === 'lg' && 'w-22 py-2',
        status === 0 &&
          'bg-main-green-100 border border-main-green-800 text-main-green-800',
        status === 1 &&
          'bg-main-green-800 border border-main-green-800 text-main-green-50',
        className,
      )}
    >
      <Text as='span' typography={size === 'sm' ? 'caption-1' : 'body-0'}>
        {label}
      </Text>
    </div>
  );
}

export { HelpStatusBadge };
