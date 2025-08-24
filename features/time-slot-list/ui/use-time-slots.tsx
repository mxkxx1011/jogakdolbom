// src/features/time-slot-list/lib/useTimeSlots.ts
import { useMemo } from 'react';

import { BlockedRange, Slot } from '../model/types';
import { at, intersects, toLabel } from '../util';

type Params = {
  date: Date | null;
  dayStart?: string; // "09:00"
  dayEnd?: string; // "21:00"
  blocked?: BlockedRange[]; // 30분 그리드 가정
  stepMinutes?: number; // 기본 30
  nowOverride?: Date; // 테스트/스토리북용
};

export function useTimeSlots({
  date,
  dayStart = '09:00',
  dayEnd = '21:00',
  blocked = [],
  stepMinutes = 30,
  nowOverride,
}: Params) {
  const { slots, isToday, currentIndex } = useMemo(() => {
    if (!date) {
      return { slots: [] as Slot[], isToday: false, currentIndex: -1 };
    }

    const result: Slot[] = [];
    const start = at(date, dayStart);
    const end = at(date, dayEnd);

    const now = nowOverride ?? new Date();
    const isToday =
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate();

    const blockedRanges =
      blocked.map(({ start, end }) => ({
        s: at(date, start),
        e: at(date, end),
      })) ?? [];

    const stepMs = stepMinutes * 60_000;
    for (let t = new Date(start); t < end; t = new Date(t.getTime() + stepMs)) {
      const tEnd = new Date(t.getTime() + stepMs);
      const disabledPast = isToday && tEnd <= now;
      const disabledBlocked = blockedRanges.some((r) =>
        intersects(t, tEnd, r.s, r.e),
      );
      result.push({
        label: toLabel(t),
        start: new Date(t),
        end: tEnd,
        disabled: disabledPast || disabledBlocked,
      });
    }

    // 현재 시간에 해당하는 index
    const idx = isToday
      ? result.findIndex(
          (s) =>
            s.start <= (nowOverride ?? new Date()) &&
            (nowOverride ?? new Date()) < s.end,
        )
      : -1;

    return { slots: result, isToday, currentIndex: idx };
  }, [date, dayStart, dayEnd, blocked, stepMinutes, nowOverride]);

  return { slots, isToday, currentIndex };
}
