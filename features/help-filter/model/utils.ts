import { ItemId, RequestStatus } from './types';

export function statusToId(status: RequestStatus): ItemId {
  if (status === 0) {
    return 'recruiting';
  }
  if (status === 1) {
    return 'matched';
  }
  if (status === 2) {
    return 'completed';
  }
  if (status === 3) {
    return 'closed';
  }
  if (status === 4) {
    return 'expired';
  }
  return 'all'; // undefined -> 전체
}
