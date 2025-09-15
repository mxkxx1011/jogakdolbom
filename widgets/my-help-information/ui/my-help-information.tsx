'use client';

import { Suspense } from 'react';

import { HelpHistoryList, type Action } from '@/features/help/history';
import { PageTab } from '@/shared/ui';

import { HelpHistoryRail } from './help-history-rail';

function MyHelpInformation() {
  const actions = [
    { id: 'requesting', label: '돌봄 요청 중', onClick: () => {} },
    { id: 'participating', label: '돌봄 참여 중', onClick: () => {} },
    { id: 'completed', label: '돌봄 완료', onClick: () => {} },
  ] as Action[];

  return (
    <div className='flex flex-col border border-gray-200 overflow-hidden rounded-xl'>
      <div className='h-12 bg-gray-50 border-b border-gray-200 flex items-center justify-center'>
        <div className='flex gap-12'>
          <PageTab href=''>돌봄 기록</PageTab>
          <PageTab href=''>조각 기록</PageTab>
          <PageTab href=''>리뷰/별점</PageTab>
        </div>
      </div>
      <div className='bg-white py-8 px-4'>
        <HelpHistoryRail actions={actions} />
        <Suspense fallback={<div>로딩 중...</div>}>
          <HelpHistoryList />
        </Suspense>
      </div>
    </div>
  );
}

export { MyHelpInformation };
