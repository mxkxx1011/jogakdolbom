'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { ComponentProps } from 'react';

import { cn } from '@/shared/util/index';

function Label({
  className,
  ...props
}: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      className={cn(
        /* 레이아웃: 플렉스, 정렬, 간격 */
        'flex items-center gap-2',
        /* 텍스트: 크기, 줄간격, 두께, 선택 방지 */
        'body-2 select-none',
        /* 그룹 상태 */
        'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        /* 피어 상태 */
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Label };
