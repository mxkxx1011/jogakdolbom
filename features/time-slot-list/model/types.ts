export type BlockedRange = { start: string; end: string };

export type Slot = {
  label: string;
  start: Date;
  end: Date;
  disabled?: boolean;
};

export interface TimeSlotListProps {
  /** 선택한 날짜 (필수) */
  date: Date | null;
  /** 하루의 시작/끝 시각 (24h) */
  dayStart?: string; // "09:00"
  dayEnd?: string; // "21:00"
  /** 이미 막혀있는 구간(반드시 30분 그리드) */
  blocked?: { start: string; end: string }[]; // ["10:00"~"11:30"]
  /** 선택 결과 콜백: ISO 문자열 범위 */
  onChange?: (range: { start: string; end: string } | null) => void;
  /** height */
  heightClassName?: string; // ex) "h-[420px]"
}
