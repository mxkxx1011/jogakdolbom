'use client';

import { useIntersect } from '@/shared/hook';
import { Empty } from '@/shared/ui';

import { useHelpList } from '../model/use-help-list';

import { HelpItem } from './help-item';

function HelpList() {
  const { data, hasNextPage, fetchNextPage } = useHelpList({ size: 6 });

  const helpList = data.helpList ?? [];

  const ref = useIntersect<HTMLDivElement>({
    onIntersect(entry, _observer) {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
  });

  if (helpList.length === 0) {
    return (
      <div className='w-3/4 h-[38.625rem] flex items-center justify-center rounded text-gray-500'>
        <Empty message='검색 결과가 없습니다.' />
      </div>
    );
  }

  return (
    <div className='w-3/4 h-[38.5rem] overflow-y-auto'>
      {helpList.map((help, idx) => (
        <HelpItem
          key={help.id}
          help={help}
          colorType={idx % 2 === 0 ? 'white' : 'gray'}
        />
      ))}
      <div ref={ref} className='h-[1px]' />
    </div>
  );
}

export { HelpList };
