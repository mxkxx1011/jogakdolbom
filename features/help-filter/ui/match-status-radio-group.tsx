

'use client';

import { useMemo } from 'react';

import { useHelpFilterStore } from '@/features/help-list/model';
import { Label, RadioGroup, RadioGroupItem, Text } from '@/shared/ui';

const items = [
  { id: 'all', label: '전체' },
  { id: 'recruiting', label: '모집 중' },
  { id: 'matched', label: '매칭 완료' },
  { id: 'completed', label: '돌봄 완료' },
] as const;

type ItemId = (typeof items)[number]['id'];

const idToStatus: Record<ItemId, undefined | 0 | 1 | 2> = {
  all: undefined,
  recruiting: 0,
  matched: 1,
  completed: 2,
};

function statusToId(status: undefined | 0 | 1 | 2): ItemId {
  if (status === 0) {
    return 'recruiting';
  }
  if (status === 1) {
    return 'matched';
  }
  if (status === 2) {
    return 'completed';
  }
  return 'all'; // undefined -> 전체
}

function MatchStatusRadioGroup() {
  const { applied, setApplied } = useHelpFilterStore();

  const currentId = useMemo(() => statusToId(applied.status), [applied.status]);

  return (
    <div className='space-y-2'>
      <Text typography='body-2'>매칭 상태</Text>
      <div>
        <RadioGroup className='gap-1.5' name='match-status' value={currentId}
          onValueChange={(nextId: string) => {
            const id = nextId as ItemId;
            setApplied({ status: idToStatus[id] });
          }}>
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
