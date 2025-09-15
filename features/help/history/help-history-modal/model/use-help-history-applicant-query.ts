'use client';

import { useQuery } from '@tanstack/react-query';

import { HelpQueryKeys } from '@/entities/help';

import { getHelpHistoryApplyList } from './service';

const page = 1;
const size = 10;

function useHelpHistoryApplicantQuery(helpHistoryId: number) {
  return useQuery({
    queryKey: HelpQueryKeys.historyApplicant(helpHistoryId),
    queryFn: () => getHelpHistoryApplyList({ helpHistoryId, page, size }),
  });
}

export { useHelpHistoryApplicantQuery };
