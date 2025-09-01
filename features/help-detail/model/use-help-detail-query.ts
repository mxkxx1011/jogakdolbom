import { useQuery } from '@tanstack/react-query';

import { HelpQueryKeys } from '@/entities/help/model/query';

import { getHelpDetail } from './service';

export function useHelpDetailQuery(helpId: number) {
  return useQuery({
    queryKey: HelpQueryKeys.detail(helpId),
    queryFn: () => getHelpDetail(helpId),
    enabled: Number.isFinite(helpId) && helpId > 0,
  });
}
