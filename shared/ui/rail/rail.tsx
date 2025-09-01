'use client';

import { cn } from '@/shared/util';

type Props = {
  /** 포인터(초록색) 위치/크기 */
  indicatorLeft?: number; // px
  indicatorWidth?: number; // px
  className?: string;
};

export function Rail({
  indicatorLeft = 0,
  indicatorWidth = 0,
  className,
}: Props) {
  return (
    <div className={cn('relative h-6', className)} aria-hidden>
      {/* 회색 전체선 */}
      <div className='absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gray-200' />
      {/* 활성 항목 포인터(초록색) */}
      <div
        className='absolute top-1/2 -translate-y-1/2 h-[3px] bg-main-green-800 rounded-full transition-all duration-200'
        style={{
          left: `${indicatorLeft}px`,
          width: `${indicatorWidth}px`,
        }}
      />
    </div>
  );
}
