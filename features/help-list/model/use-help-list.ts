'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { HelpQueryKeys, HelpData } from '@/entities/help';

import { getHelpList } from './service';

function useHelpList() {
  const { data } = useSuspenseQuery<HelpData>({
    queryKey: HelpQueryKeys.list(),
    queryFn: getHelpList,
  });

  const helpList = data.requests ?? [];
  const page = data.pagination.page;

  return { helpList, page };
}

export { useHelpList };
