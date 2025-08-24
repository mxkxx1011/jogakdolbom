// features/time-slot-list/ui/TimeSlotList.tsx
'use client';

import { clsx } from 'clsx';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';

import { TimeSlotListProps } from '../model/types';

import { useTimeSlots } from './use-time-slots';

function TimeSlotList({
  date,
  dayStart = '09:00',
  dayEnd = '21:00',
  blocked = [],
  onChange,
  heightClassName = 'h-[400px]',
}: TimeSlotListProps) {
  const [startIdx, setStartIdx] = useState<number | null>(null);
  const [endIdx, setEndIdx] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { slots } = useTimeSlots({
    date,
    dayStart,
    dayEnd,
    blocked,
    stepMinutes: 30,
  });

  // 🔧 선택값을 즉시 방출하는 헬퍼 (이벤트 시 직접 호출)
  const emit = (si: number | null, ei: number | null) => {
    // 🔧
    if (!onChange || si === null || ei === null || !slots.length) {
      // 🔧
      onChange?.(null); // 🔧
      return; // 🔧
    } // 🔧
    const s = slots[Math.min(si, ei)]; // 🔧
    const e = slots[Math.max(si, ei)]; // 🔧
    onChange({ start: format(s.start, 'HH:mm'), end: format(e.end, 'HH:mm') }); // 🔧
  }; // 🔧

  // 날짜가 바뀌면 선택 초기화
  useEffect(() => {
    setStartIdx(null);
    setEndIdx(null);
    onChange?.(null); // 🔧 날짜 변경 시 명시적 초기화 방출
  }, [date, onChange]); // 🔧 onChange 의존성 추가

  // 오늘이면 현재 시간 중앙으로 스크롤
  useEffect(() => {
    if (!date || !slots.length || !containerRef.current) {
      return;
    }

    const now = new Date();
    const isToday =
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate();
    if (!isToday) {
      return;
    }

    const targetIdx = slots.findIndex((s) => s.start <= now && now < s.end);
    if (targetIdx !== -1) {
      const el = containerRef.current.querySelectorAll('button')[targetIdx];
      el?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, [date, slots]);

  // 🔧 (삭제) 선택 변경 이펙트로 onChange 호출하던 로직 제거
  // useEffect(() => { ... }, [startIdx, endIdx, onChange, slots]);                // 🔧 제거

  const handleDown = (i: number) => {
    if (slots[i].disabled) {
      return;
    }
    setDragging(true);
    setStartIdx(i);
    setEndIdx(i);
    emit(i, i); // 🔧 즉시 방출
  };

  const handleEnter = (i: number) => {
    if (!dragging) {
      return;
    }
    if (slots[i].disabled) {
      return;
    }

    const base = startIdx ?? i; // 🔧
    const lo = i > base ? base : i; // 🔧
    const hi = i > base ? i : base; // 🔧
    for (let k = lo; k <= hi; k++) {
      if (slots[k].disabled) {
        return;
      }
    }
    setEndIdx(i);
    emit(startIdx, i); // 🔧 즉시 방출
  };

  const handleUp = () => setDragging(false);

  const handleClick = (i: number) => {
    if (slots[i].disabled) {
      return;
    }

    // 아직 아무것도 선택 안 됨
    if (startIdx === null || endIdx === null) {
      setStartIdx(i);
      setEndIdx(i);
      emit(i, i); // 🔧 즉시 방출
      return;
    }

    const lo = Math.min(startIdx, endIdx);
    const hi = Math.max(startIdx, endIdx);

    if (i >= lo && i <= hi) {
      const distStart = i - lo;
      const distEnd = hi - i;
      if (distStart <= distEnd) {
        setStartIdx(i);
        emit(i, endIdx); // 🔧 즉시 방출
      } else {
        setEndIdx(i);
        emit(startIdx, i); // 🔧 즉시 방출
      }
      return;
    }

    if (i === hi + 1) {
      setEndIdx(i);
      emit(startIdx, i); // 🔧 즉시 방출
      return;
    }
    if (i === lo - 1) {
      setStartIdx(i);
      emit(i, endIdx); // 🔧 즉시 방출
      return;
    }

    // 사이에 disabled가 끼면 새 구간으로 시작(리셋)
    setStartIdx(i);
    setEndIdx(i);
    emit(i, i); // 🔧 즉시 방출
  };

  if (!date) {
    return (
      <div className='text-gray-600 body-3'>먼저 날짜를 선택해주세요.</div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={clsx(
        'w-[260px] overflow-y-auto rounded border border-gray-200 bg-white',
        heightClassName,
      )}
      onMouseLeave={() => setDragging(false)}
    >
      {slots.map((s, i) => {
        const active =
          startIdx !== null &&
          endIdx !== null &&
          i >= Math.min(startIdx, endIdx) &&
          i <= Math.max(startIdx, endIdx);

        return (
          <button
            key={s.label}
            type='button'
            disabled={s.disabled}
            onMouseDown={(e) => {
              e.preventDefault();
              handleDown(i);
            }} // 🔧 텍스트 선택 방지
            onMouseUp={handleUp}
            onMouseEnter={() => handleEnter(i)}
            onClick={() => handleClick(i)}
            className={clsx(
              'w-full h-16 text-left px-6 select-none',
              'border-b last:border-b-0',
              s.disabled && 'text-gray-400 cursor-not-allowed bg-gray-50',
              !s.disabled && 'hover:bg-gray-50 cursor-pointer',
              active &&
                'bg-[var(--color-main-green-100)] text-[var(--color-main-green-900)] font-semibold',
            )}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
}

export { TimeSlotList };
