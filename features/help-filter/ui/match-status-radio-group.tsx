import { Label, RadioGroup, RadioGroupItem, Text } from '@/shared/ui';

const items = [
  { id: 'all', label: '전체' },
  { id: 'recruiting', label: '모집 중' },
  { id: 'matched', label: '매칭 완료' },
  { id: 'completed', label: '돌봄 완료' },
] as const;

function MatchStatusRadioGroup() {
  return (
    <div className='space-y-2'>
      <Text typography='body-2'>매칭 상태</Text>
      <div>
        <RadioGroup className='gap-1.5' name='match-status'>
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
