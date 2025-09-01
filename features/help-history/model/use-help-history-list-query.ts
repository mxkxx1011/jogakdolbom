'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { HelpQueryKeys } from '@/entities/help/model/query';

import { getHelpHistoryList } from './api';

function useHelpHistoryListQuery(size: number) {
  return useSuspenseInfiniteQuery({
    queryKey: HelpQueryKeys.historyList(),
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getHelpHistoryList({ page: pageParam, size }),
    getNextPageParam: (lastPage) => {
      const { page, totalPage } = lastPage.pagination;

      return page < totalPage ? page + 1 : undefined;
    },
    select: (data) => {
      const helpHistoryList = data.pages.flatMap((page) => page.requests);

      return {
        helpHistoryList,
        page: data.pages[data.pages.length - 1]?.pagination.page,
        totalPage: data.pages[data.pages.length - 1]?.pagination.totalPage,
      };
    },
    retry: false,
  });
}

export { useHelpHistoryListQuery };
