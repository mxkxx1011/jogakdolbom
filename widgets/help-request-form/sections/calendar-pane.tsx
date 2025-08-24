import { parse, format as fmt } from 'date-fns';
import { Controller, useFormContext } from 'react-hook-form';

import { CareDayPicker } from '@/features/date-picker/ui/care-day-picker';
import { Text } from '@/shared/ui';

function CalendarPane() {
  const { control } = useFormContext();

  return (
    <div className='py-9 w-130 flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <Text typography='headline-2' className='text-main-green-900'>
          날짜 선택
        </Text>
        <Controller
          name='serviceDate' // string: 'yyyy-MM-dd'
          control={control}
          defaultValue='1' // ✅ controlled 보장
          render={({ field, fieldState }) => {
            const dateValue = field.value
              ? parse(field.value, 'yyyy-MM-dd', new Date())
              : undefined;

            return (
              <>
                <CareDayPicker
                  selected={dateValue}
                  onSelect={(d) =>
                    field.onChange(d ? fmt(d, 'yyyy-MM-dd') : '')
                  }
                />
                {fieldState.error && (
                  <p className='mt-2 text-sm text-red-600'>
                    {fieldState.error.message}
                  </p>
                )}
              </>
            );
          }}
        />
      </div>
    </div>
  );
}

export { CalendarPane };
