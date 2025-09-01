import { cn } from '@/shared/util';

import { Text } from '../text';

function DDayBadge({ date }: { date: Date | string }) {
  const today = new Date();
  const targetDate = new Date(date);

  const dDay = Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  const isToday = today.toDateString() === targetDate.toDateString();
  const isPast = dDay < 0;

  return (
    <div
      className={cn(
        'border border-gray-700 rounded-full py-1.5 w-15',
        'flex items-center justify-center',
        isToday ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700',
        isPast && 'border-gray-500 bg-gray-100 text-gray-600',
      )}
    >
      <Text as='span' typography='caption-1'>
        {isToday ? 'TODAY' : isPast ? `D+${Math.abs(dDay)}` : `D-${dDay}`}
      </Text>
    </div>
  );
}

export { DDayBadge };
