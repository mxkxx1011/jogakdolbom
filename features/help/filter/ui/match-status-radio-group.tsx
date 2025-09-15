'use client';

import { useMemo } from 'react';

import { useHelpFilterStore } from '@/features/help/list/model';
import { Label, RadioGroup, RadioGroupItem, Text } from '@/shared/ui';

import { idToStatus, ItemId, items, statusToId } from '../model';

function MatchStatusRadioGroup() {
  const { applied, setApplied } = useHelpFilterStore();

  const currentId = useMemo(() => statusToId(applied.status), [applied.status]);

  const handleValueChange = (nextId: string) => {
    const id = nextId as ItemId;
    setApplied({ status: idToStatus[id] });
  };

  return (
    <div className='space-y-2'>
      <Text typography='body-2'>매칭 상태</Text>
      <div>
        <RadioGroup
          className='gap-1.5'
          name='match-status'
          value={currentId}
          onValueChange={handleValueChange}
        >
          {items.map((item) => (
            <div key={item.id} className='flex items-center gap-2'>
              <RadioGroupItem id={item.id} value={item.id} />
              <Label className='body-3' htmlFor={item.id}>
                {item.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export { MatchStatusRadioGroup };
