import { parse, format as fmt, isValid } from 'date-fns';
import { useCallback, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { TimeSlotList } from '@/features/time-slot-list/ui';
import { Text } from '@/shared/ui';

function TimePane() {
  const { control, setValue, getValues } = useFormContext();

  const serviceDate: string = useWatch({ control, name: 'serviceDate' });

  const date = serviceDate
    ? parse(serviceDate, 'yyyy-MM-dd', new Date())
    : null;

  // 상단 라벨 (오늘/요일 한국어)
  const selectedDateLabel = date && isValid(date) && fmt(date, 'M월 d일 EEEE');

  useEffect(() => {
    // 날짜 바뀔 때만 비우기 + 불필요한 재검증 방지
    const s = getValues('startTime');
    const e = getValues('endTime');
    if (s !== '') {
      setValue('startTime', '', { shouldDirty: true, shouldValidate: false });
    }
    if (e !== '') {
      setValue('endTime', '', { shouldDirty: true, shouldValidate: false });
    }
  }, [serviceDate, getValues, setValue]);

  const toDateTime = (baseDate: string, t: string) => {
    if (!t) {
      return '';
    }
    if (t.includes('T')) {
      return t;
    } // 이미 YYYY-MM-DDTHH:mm(:ss) 형태
    const hhmm = t.length >= 5 ? t.slice(0, 5) : t;
    return `${baseDate}T${hhmm}:00`;
  };

  const handleChange = useCallback(
    (range: { start: string; end: string } | null) => {
      if (!range) {
        const s = getValues('startTime');
        const e = getValues('endTime');
        if (s !== '') {
          setValue('startTime', '', {
            shouldDirty: true,
            shouldValidate: false,
          });
        }
        if (e !== '') {
          setValue('endTime', '', { shouldDirty: true, shouldValidate: false });
        }
        return;
      }

      if (!serviceDate) {
        return;
      } // 날짜 없으면 무시                         🔧

      // 시간은 항상 날짜와 결합해 같은 포맷으로 저장 (로컬 기준, Z 금지)
      const nextStart = toDateTime(serviceDate, range.start);
      const nextEnd = toDateTime(serviceDate, range.end);
      const currStart = getValues('startTime');
      const currEnd = getValues('endTime');

      if (currStart !== nextStart) {
        setValue('startTime', nextStart, {
          shouldDirty: true,
          shouldValidate: false,
        });
      }
      if (currEnd !== nextEnd) {
        setValue('endTime', nextEnd, {
          shouldDirty: true,
          shouldValidate: true,
        });
      }
    },
    [getValues, serviceDate, setValue],
  );

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
      <TimeSlotList
        date={date ?? null}
        dayStart='07:00'
        dayEnd='22:30'
        onChange={handleChange}
      />
    </div>
  );
}

export { TimePane };
