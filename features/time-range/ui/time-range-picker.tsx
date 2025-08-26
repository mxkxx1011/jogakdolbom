/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';

import { clsx } from 'clsx';
import { addMinutes, format, isSameDay, setHours, setMinutes } from 'date-fns';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  type FieldValues,
  useFormContext,
  type FieldPath,
} from 'react-hook-form';

type Props<FormValues extends FieldValues> = {
  /** 선택하는 기준 날짜 (같은 날 범위만 선택 가능) */
  date: Date | null;

  /** RHF 필드 이름 (string) */
  startField: FieldPath<FormValues>;
  endField: FieldPath<FormValues>;

  /** 영업 시작/종료 시각 (로컬, 'HH:mm') */
  dayStart?: string; // default '09:00'
  dayEnd?: string; // default '21:00'

  /** 분 단위 간격 (기본 30) */
  stepMinutes?: number;

  /** 차단된 슬롯 (로컬 HH:mm 기반). 필요 없으면 생략 */
  blocked?: { start: string; end: string }[];

  /** 고정 높이 클래스 (스크롤 영역) */
  heightClassName?: string;

  /** 저장 문자열 포맷: 'iso-local' | 'hh:mm' */
  saveFormat?: 'iso-local' | 'hh:mm';
};

/** 'HH:mm' → number hour/min */
const parseHHmm = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return { h, m };
};

function buildDateAt(date: Date, hhmm: string) {
  const { h, m } = parseHHmm(hhmm);
  return setMinutes(setHours(date, h), m);
}

function sameOrAfter(a: Date, b: Date) {
  return a.getTime() >= b.getTime();
}
function before(a: Date, b: Date) {
  return a.getTime() < b.getTime();
}

export function TimeRangePicker<FormValues extends FieldValues>({
  date,
  startField,
  endField,
  dayStart = '09:00',
  dayEnd = '21:00',
  stepMinutes = 30,
  blocked = [],
  heightClassName = 'h-[420px]',
  saveFormat = 'iso-local',
}: Props<FormValues>) {
  const { setValue } = useFormContext();

  // 슬롯 생성
  const slots = useMemo(() => {
    if (!date) {
      return [];
    }
    const start = buildDateAt(date, dayStart);
    const end = buildDateAt(date, dayEnd);

    const arr: { label: string; start: Date; end: Date; disabled: boolean }[] =
      [];
    for (let t = start; before(t, end); t = addMinutes(t, stepMinutes)) {
      const s = t;
      const e = addMinutes(t, stepMinutes);
      arr.push({
        start: s,
        end: e,
        label: format(s, 'HH:mm'),
        disabled: blocked.some((b) => {
          // 간단한 HH:mm 차단 로직
          const bs = buildDateAt(date, b.start);
          const be = buildDateAt(date, b.end);
          // 겹치면 disabled
          return sameOrAfter(e, bs) && sameOrAfter(be, s);
        }),
      });
    }
    return arr;
  }, [date, dayStart, dayEnd, stepMinutes, blocked]);

  // 내부 선택 상태 (인덱스)
  const [startIdx, setStartIdx] = useState<number | null>(null);
  const [endIdx, setEndIdx] = useState<number | null>(null);
  const draggingRef = useRef(false);

  const dateKey = date ? format(date, 'yyyy-MM-dd') : '';

  useEffect(() => {
    setStartIdx(null);
    setEndIdx(null);
  }, [dateKey]);

  // 저장 유틸
  const emitToForm = (si: number | null, ei: number | null) => {
    if (!date || si === null || ei === null || slots.length === 0) {
      return;
    }

    const lo = Math.min(si, ei);
    const hi = Math.max(si, ei);
    const s = slots[lo].start;
    const e = slots[hi].end;

    if (!isSameDay(s, date) || !isSameDay(e, date)) {
      return;
    }

    if (saveFormat === 'hh:mm') {
      setValue(startField, format(s, 'HH:mm') as any, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue(endField, format(e, 'HH:mm') as any, {
        shouldDirty: true,
        shouldValidate: true,
      });
    } else {
      // iso-local (Z 붙이지 않음)
      const ymd = format(date, 'yyyy-MM-dd');
      const startStr = `${ymd}T${format(s, 'HH:mm')}:00`;
      const endStr = `${ymd}T${format(e, 'HH:mm')}:00`;
      setValue(startField, startStr as any, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue(endField, endStr as any, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  };

  const handleClick = (i: number) => {
    if (!slots.length || slots[i].disabled) {
      return;
    }

    // 아직 아무것도 선택되지 않은 경우
    if (startIdx === null || endIdx === null) {
      setStartIdx(i);
      setEndIdx(i);
      emitToForm(i, i);
      return;
    }

    const lo = Math.min(startIdx, endIdx);
    const hi = Math.max(startIdx, endIdx);

    // 내부 클릭 → 가까운 쪽으로 축소
    if (i >= lo && i <= hi) {
      const distStart = i - lo;
      const distEnd = hi - i;
      if (distStart <= distEnd) {
        setStartIdx(i);
        emitToForm(i, endIdx);
      } else {
        setEndIdx(i);
        emitToForm(startIdx, i);
      }
      return;
    }

    // 바깥 클릭 → 범위 확장 또는 재시작
    setStartIdx(Math.min(lo, i));
    setEndIdx(Math.max(hi, i));
    emitToForm(Math.min(lo, i), Math.max(hi, i));
  };

  const handleMouseDown = (i: number) => {
    if (!slots.length || slots[i].disabled) {
      return;
    }
    draggingRef.current = true;
    setStartIdx(i);
    setEndIdx(i);
    emitToForm(i, i);
  };

  const handleMouseEnter = (i: number) => {
    if (!draggingRef.current) {
      return;
    }
    if (!slots.length || slots[i].disabled) {
      return;
    }
    setEndIdx(i);
    emitToForm(startIdx, i);
  };

  const handleMouseUp = () => {
    draggingRef.current = false;
  };

  if (!date) {
    return (
      <div className='body-3 text-gray-600'>먼저 날짜를 선택해주세요.</div>
    );
  }

  return (
    <div
      className={clsx(
        'w-[260px] overflow-y-auto rounded border border-gray-200 bg-white',
        heightClassName,
      )}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
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
              handleMouseDown(i);
            }}
            onMouseEnter={() => handleMouseEnter(i)}
            onClick={() => handleClick(i)}
            className={clsx(
              'relative w-full h-16 text-left px-6 select-none',
              'border-b last:border-b-0',
              s.disabled && 'text-gray-400 cursor-not-allowed bg-gray-50',
              !s.disabled && 'hover:bg-main-green-400 cursor-pointer',
              active &&
                'hover:bg-main-green-800 bg-main-green-800 text-white font-semibold',
            )}
          >
            {s.label}

            {/* 선택 배지 (활성 슬롯의 끝 인덱스에만 표시) */}
            {active &&
              endIdx !== null &&
              i === Math.max(startIdx ?? i, endIdx) && (
                <span className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white text-black text-sm px-3 py-1'>
                  선택
                </span>
              )}
          </button>
        );
      })}
    </div>
  );
}
