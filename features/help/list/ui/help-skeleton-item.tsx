'use client';

import { Skeleton } from '@/shared/ui';
import { cn } from '@/shared/util';

interface Props {
  colorType: 'white' | 'gray';
}

function HelpItemSkeleton({ colorType }: Props) {
  return (
    <div
      className={cn(
        'flex items-center justify-between py-4.5 px-15 border-b border-gray-300',
        colorType === 'white' ? 'bg-white' : 'bg-gray-50',
      )}
      aria-busy='true'
      aria-live='polite'
    >
      {/* 프로필 */}
      <div className='flex items-center gap-2.5 min-w-0'>
        <Skeleton shape='circle' className='size-11' />
        <div className='flex flex-col gap-1 min-w-0'>
          <Skeleton className='h-4 w-12' />
          <Skeleton className='h-3 w-20' />
        </div>
      </div>

      {/* 중앙 정보 */}
      <div className='flex flex-col gap-1'>
        <Skeleton className='h-5 w-16' />
        <Skeleton className='h-4 w-24' />
        <Skeleton className='h-3 w-36' />
      </div>

      {/* 시간/조각 뱃지 */}
      <div className='flex gap-4'>
        <div className='flex flex-col items-center gap-2 w-9'>
          <Skeleton shape='circle' className='size-6' />
          <Skeleton className='h-4 w-10' />
        </div>
        <div className='flex flex-col items-center gap-2 w-9'>
          <Skeleton shape='circle' className='size-6' />
          <Skeleton className='h-4 w-10' />
        </div>
      </div>

      {/* 버튼 */}
      <Skeleton className='h-9 w-32 rounded-lg' />
    </div>
  );
}

export { HelpItemSkeleton };
