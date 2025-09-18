'use client';

import { HelpHistory } from '@/entities/help';
import { useIntersect } from '@/shared/hook';
import { Empty, useModalStore } from '@/shared/ui';

import { HelpHistoryModal } from '../help-history-modal/ui';
import { useHelpHistoryListQuery } from '../model';

import { HelpHistoryItem } from './help-history-item';

function HelpHistoryList() {
  const size = 10;
  const { data, hasNextPage, fetchNextPage } = useHelpHistoryListQuery(size);

  const { openModal } = useModalStore();
  const helpHistoryList = data?.helpHistoryList ?? [];

  const ref = useIntersect<HTMLDivElement>({
    onIntersect: (entry, _observer) => {
      if (entry.isIntersecting) {
        if (hasNextPage) {
          fetchNextPage();
        }
      }
    },
  });

  return (
    <div className='h-[39rem] overflow-y-auto flex flex-col gap-4'>
      {helpHistoryList.length === 0 ? (
        <Empty message='돌봄 기록이 없습니다.' />
      ) : (
        <>
          {helpHistoryList.map((helpHistory: HelpHistory) => (
            <HelpHistoryItem
              key={helpHistory.id}
              helpHistory={helpHistory}
              onClick={() =>
                openModal(<HelpHistoryModal helpHistory={helpHistory} />)
              }
            />
          ))}
          <div ref={ref} className='h-[1px]' />
        </>
      )}
    </div>
  );
}

export { HelpHistoryList };
