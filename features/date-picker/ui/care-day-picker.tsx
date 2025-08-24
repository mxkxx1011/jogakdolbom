'use client';

import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/style.css';
import '@/shared/asset/calendar.css';

interface Props {
  selected?: Date;
  onSelect?: (d?: Date) => void;
}

function CareDayPicker({ selected, onSelect }: Props) {
  const today = new Date();

  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  return (
    <div className='overflow-x-auto'>
      <DayPicker
        className='care-rdp'
        mode='single'
        weekStartsOn={1} // 월요일 시작
        selected={selected}
        onSelect={onSelect}
        locale={ko}
        formatters={{
          formatCaption: (month) => format(month, 'yyyy년 M월', { locale: ko }),
        }}
        disabled={{
          before: startOfToday,
        }}
        modifiers={{
          future: {
            after: new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate() - 2,
            ),
          }, // 오늘 포함 원하면 조건 조정
        }}
        classNames={{
          // 그리드/셀에 Tailwind 유틸리티 부여
          months: 'rdp-months',
          month: 'rdp-month',
          caption: 'rdp-caption text-gray-90 text-base font-medium',
          caption_label: 'rdp-caption-label',
          nav: 'rdp-nav',
          table: 'rdp-table',
          head_row: 'rdp-head-row',
          head_cell: 'rdp-head-cell text-gray-60 text-sm font-medium',
          row: 'rdp-row',
          cell: 'rdp-cell',
          day: 'rdp-day text-gray-90',
          day_selected: 'rdp-day-selected',
          day_today: 'rdp-day-today',
          day_disabled: 'rdp-day-disabled',
          day_outside: 'rdp-day-outside text-gray-30',
          // ...props.classNames,
        }}
        modifiersClassNames={{
          future: 'rdp-day-future', // 2) 미래 날짜
          selected: 'rdp-day-selected', // 3) 선택
          today: 'rdp-day-today', // 오늘
          disabled: 'rdp-day-disabled no-hover', // 1) 과거 → hover 제거
        }}
      />
    </div>
  );
}

export { CareDayPicker };
