'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { HelpQueryKeys } from '@/entities/help';

import { getHelpHistoryList } from './api';

function useHelpHistoryListQuery(size: number) {
  return useSuspenseInfiniteQuery({
    queryKey: HelpQueryKeys.historyList(size),
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getHelpHistoryList({ page: pageParam, size }),
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination;

      return page < totalPages ? page + 1 : undefined;
    },
    select: (data) => {
      const helpHistoryList = data.pages.flatMap((page) => page.requests);

      return {
        helpHistoryList,
        page: data.pages[data.pages.length - 1]?.pagination.page,
        totalPages: data.pages[data.pages.length - 1]?.pagination.totalPages,
      };
    },
    retry: false,
  });
}

export { useHelpHistoryListQuery };
