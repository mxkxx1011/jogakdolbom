import { QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { isClient, isServer } from '../util';

const STALE_TIME = 1000 * 60 * 5; // 5분
const GC_TIME = 1000 * 60 * 10; // 10분

function clientQuery() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: STALE_TIME,
        gcTime: GC_TIME,
        retry: (failureCount, error) => {
          if (error instanceof AxiosError) {
            return (
              !!error.response?.status &&
              error.response.status >= 500 &&
              failureCount < 3
            );
          }
          return failureCount < 1;
        },

        refetchOnMount: false,
        refetchOnWindowFocus: false,

        retryDelay: (failureCount) => {
          return Math.min(1000 * 2 ** failureCount, 30000);
        },
        ...(isClient() && {
          throwOnError: true,
        }),
      },
      mutations: {
        retry: false,
        onError: (error) => {
          if (isServer()) {
            console.error(error);
            return;
          }

          console.error('client query error : ', error);
        },
      },
    },
  });
}

export { clientQuery };
