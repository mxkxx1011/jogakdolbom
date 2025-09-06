/**
 * HelpRequest.status
0: 요청 → 아직 지원/배정 전
1: 배정 → 헬퍼가 매칭 완료
2: 완료 → 돌봄 서비스 끝남(리뷰 작성하거나 3일 지났을 때)
3: 취소 → 요청자가 직접 취소(맘에 안 들어서)
4: 모집종료 → 날짜가 지나 더 이상 지원 불가
 */

import { ItemId, RequestStatus } from './types';

export const items = [
  { id: 'all', label: '전체' },
  { id: 'recruiting', label: '모집 중' },
  { id: 'matched', label: '매칭 완료' },
  { id: 'completed', label: '돌봄 완료' },
  { id: 'closed', label: '돌봄 취소' },
  { id: 'expired', label: '돌봄 종료' },
] as const;

export const idToStatus: Record<ItemId, RequestStatus> = {
  all: undefined,
  recruiting: 0,
  matched: 1,
  completed: 2,
  closed: 3,
  expired: 4,
};
