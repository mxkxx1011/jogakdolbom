import { IconPuzzle } from '@/shared/asset';
import { Divider, Text } from '@/shared/ui';

import { CalendarPane } from './calendar-pane';
import { LocationPane } from './location-pane';
import { TimePane } from './time-pane';

function ScheduleSection() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <Text as='h3' typography='headline-2' className='text-main-green-900'>
          날짜 및 시간을 선택해주세요.
        </Text>
        <Text
          typography='body-0'
          className='text-point-purple fill-point-purple flex items-center gap-1.5 pr-2'
        >
          <IconPuzzle /> <span>돌봄 요청 30분당 3개의 조각이 필요해요!</span>
        </Text>
      </div>
      <section className='w-full bg-white rounded flex gap-2.5 py-6 h-150'>
        <LocationPane />
        <Divider isVertical />
        <CalendarPane />
        <Divider isVertical />
        <TimePane />
      </section>
    </div>
  );
}

export { ScheduleSection };
