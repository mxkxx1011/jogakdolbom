import { Controller, useFormContext } from 'react-hook-form';

import { Label, RadioGroup, RadioGroupItem, Text } from '@/shared/ui';

import { CARE_TYPES } from '../model';

function SelectHelpType() {
  const { control } = useFormContext();

  return (
    <div className='flex flex-col gap-5'>
      <Text as='h3' typography='headline-2' className='text-main-green-900'>
        돌봄 유형을 선택해주세요
      </Text>
      <Controller
        name='helpType'
        control={control}
        render={({ field, fieldState }) => (
          <RadioGroup
            defaultValue='1'
            value={field.value != null ? field.value : undefined}
            // onChange={field.onChange}
            onValueChange={(value) => field.onChange(value)}
            // onBlur={field.onBlur}
            className='flex items-center gap-5'
          >
            {CARE_TYPES.map((careType) => (
              <div key={careType.id} className='flex items-center gap-1.5'>
                <RadioGroupItem value={careType.value} id={careType.id}>
                  {careType.label}
                </RadioGroupItem>
                <Label htmlFor={careType.id}>{careType.label}</Label>
              </div>
            ))}
            {fieldState.error && (
              <p className='text-red-500'>{fieldState.error.message}</p>
            )}
          </RadioGroup>
        )}
      />
    </div>
  );
}

export { SelectHelpType };
