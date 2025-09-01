import { hhmm } from './hhmm';

function getTimeRange(startTime: string, endTime: string) {
  return `${hhmm(startTime)} ~ ${hhmm(endTime)}`;
}

export { getTimeRange };
