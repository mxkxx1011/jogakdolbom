'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { HelpFilter, HelpQueryKeys } from '@/entities/help';

import { getHelpList } from './service';
import { useHelpFilterStore } from './use-help-filter-store';

function useHelpList({ size }: Pick<HelpFilter, 'size'>) {
  const { applied } = useHelpFilterStore();

  return useSuspenseInfiniteQuery({
    queryKey: HelpQueryKeys.list(applied, size),
    queryFn: ({ pageParam }) =>
      getHelpList({
        page: pageParam,
        size,
        status: applied.status,
        helpTypes: applied.helpTypes,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination;

      return page < totalPages ? page + 1 : undefined;
    },
    select: (data) => {
      const helpList = data.pages.flatMap((page) => page.requests);

      return {
        helpList,
        page: data.pages[data.pages.length - 1].pagination.page,
        totalPages: data.pages[data.pages.length - 1].pagination.totalPages,
      };
    },
  });
}

export { useHelpList };
