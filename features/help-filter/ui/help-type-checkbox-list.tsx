'use client';

import { HelpType } from '@/entities/help';
import { useHelpFilterStore } from '@/features/help-list/model';
import { Checkbox, Label, Text } from '@/shared/ui';

const items = [
  { id: 1, label: '등/하원 돌봄' },
  { id: 2, label: '놀이 돌봄' },
  { id: 3, label: '동행 돌봄' },
  { id: 4, label: '기타 돌봄' },
] as const;

function HelpTypeCheckboxList() {
  const { applied, setApplied } = useHelpFilterStore();

  const toggle = (val: HelpType) => {
    const current = applied.helpTypes;
    const next = current.includes(val)
      ? current.filter((v) => v !== val)
      : [...current, val];
    setApplied({ helpTypes: next });
  };

  return (
    <div className='space-y-2'>
      <Text typography='body-2'>돌봄 유형</Text>
      <div className='flex flex-col gap-2'>
        {items.map((item) => (
          <div key={item.id} className='flex items-center gap-2'>
            <Checkbox id={item.id.toString()} value={item.id} checked={applied.helpTypes.includes(item.id)} onCheckedChange={() => toggle(item.id)} />
            <Label htmlFor={item.id.toString()} className='body-3 '>
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

export { HelpTypeCheckboxList };
