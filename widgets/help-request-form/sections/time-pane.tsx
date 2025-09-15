'use client';

import { format as fmt, parse } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useFormContext, useWatch } from 'react-hook-form';

import { HelpRequest } from '@/entities/help';
import { TimeRangePicker } from '@/features/time-range/ui/time-range-picker';
import { Text } from '@/shared/ui';

function TimePane() {
  const { control } = useFormContext();

  const serviceDate: string = useWatch({ control, name: 'serviceDate' });

  const date = serviceDate
    ? parse(serviceDate, 'yyyy-MM-dd', new Date())
    : null;

  // 상단 라벨 (오늘/요일 한국어)
  const selectedDateLabel = date && fmt(date, 'M월 d일 EEEE', { locale: ko });

  return (
    <div className='py-9 px-12'>
      <div className='flex flex-col'>
        <Text as='h3' typography='headline-2' className='text-main-green-900'>
          시간 선택
        </Text>
        <Text typography='caption-1' as='span' className='text-gray-400'>
          (기본 30분 단위)
        </Text>
      </div>
      <Text typography='body-0' className='text-black mt-2 mb-6'>
        {selectedDateLabel}
      </Text>

      <TimeRangePicker<HelpRequest>
        date={date}
        startField='startTime'
        endField='endTime'
        dayStart='07:00'
        dayEnd='22:30'
        stepMinutes={30}
        saveFormat='hh:mm'
      />
    </div>
  );
}

export { TimePane };
