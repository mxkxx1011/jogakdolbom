'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { HelpFilter, HelpQueryKeys } from '@/entities/help';

import { getHelpList } from './service';
import { useHelpFilterStore } from './use-help-filter-store';

function useHelpList({ size }: Pick<HelpFilter, 'size'>) {
  const { applied } = useHelpFilterStore();

  return useSuspenseInfiniteQuery({
    queryKey: HelpQueryKeys.list(applied),
    queryFn: ({ pageParam }) =>
      getHelpList({
        page: pageParam,
        size,
        status: applied.status,
        helpTypes: applied.helpTypes,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPage } = lastPage.pagination;

      return page < totalPage ? page + 1 : undefined;
    },
    select: (data) => {
      const helpList = data.pages.flatMap((page) => page.requests);

      return {
        helpList,
        page: data.pages[data.pages.length - 1].pagination.page,
        totalPage: data.pages[data.pages.length - 1].pagination.totalPage,
      };
    },
  });
}

export { useHelpList };
