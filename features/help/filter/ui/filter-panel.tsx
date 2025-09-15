'use client';

import { useHelpFilterStore } from '@/features/help/list/model';
import { Button, Divider, Text } from '@/shared/ui';

import { HelpTypeCheckboxList } from './help-type-checkbox-list';
import { MatchStatusRadioGroup } from './match-status-radio-group';

function FilterPanel() {
  const { resetApplied } = useHelpFilterStore();

  return (
    <div className='w-1/4 flex flex-col gap-7.5'>
      <div className='flex items-center justify-between '>
        <Text>필터</Text>
        <Button
          size='fit'
          type='button'
          variant='link'
          onClick={resetApplied}
          className='caption-1 text-gray-700 underline hover:text-gray-900'
        >
          초기화
        </Button>
      </div>
      <MatchStatusRadioGroup />
      <Divider />
      <HelpTypeCheckboxList />
    </div>
  );
}

export { FilterPanel };
