import { Checkbox, Label, Text } from '@/shared/ui';

const items = [
  { id: '1', label: '등/하원 돌봄' },
  { id: '2', label: '놀이 돌봄' },
  { id: '3', label: '동행 돌봄' },
  { id: '4', label: '기타 돌봄' },
] as const;

function HelpTypeCheckboxList() {
  return (
    <div className='space-y-2'>
      <Text typography='body-2'>돌봄 유형</Text>
      <div className='flex flex-col gap-2'>
        {items.map((item) => (
          <div key={item.id} className='flex items-center gap-2'>
            <Checkbox id={item.id} value={item.id} />
            <Label htmlFor={item.id} className='body-3 '>
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

export { HelpTypeCheckboxList };
