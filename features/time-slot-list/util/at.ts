import { parseHM } from './parse-hour-min';

/** date(yyyy-mm-dd)에 hm("HH:MM")를 합쳐 Date 생성 */
function at(date: Date, hm: string) {
  const d = new Date(date);
  const { h, m } = parseHM(hm);
  d.setHours(h, m, 0, 0);
  return d;
}

export { at };
