'use client';

import { useHelpList } from '../model/use-help-list';

import { HelpItem } from './help-item';

function HelpList() {
  const { helpList } = useHelpList();

  return (
    <div className='w-3/4'>
      {helpList.map((help, idx) => (
        <HelpItem
          key={help.id}
          help={help}
          colorType={idx % 2 === 0 ? 'white' : 'gray'}
        />
      ))}
    </div>
  );
}

export { HelpList };
