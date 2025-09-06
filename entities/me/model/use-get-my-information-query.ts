'use client';

import { useQuery } from '@tanstack/react-query';

import { getMe } from '../api';

import { MyQueryKeys } from './query';

export function useGetMyInformationQuery() {
  return useQuery({
    queryKey: MyQueryKeys.myInformation(),
    queryFn: getMe,
  });
}
