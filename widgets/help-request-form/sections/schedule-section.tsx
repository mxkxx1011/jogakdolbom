import { Divider, Text } from '@/shared/ui';

import { CalendarPane } from './calendar-pane';
import { LocationPane } from './location-pane';
import { TimePane } from './time-pane';

function ScheduleSection() {
  return (
    <div className='flex flex-col gap-5'>
      <Text as='h3' typography='headline-2' className='text-main-green-900'>
        날짜 및 시간을 선택해주세요.
      </Text>
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
