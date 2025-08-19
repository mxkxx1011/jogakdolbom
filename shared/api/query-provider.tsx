'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, type ReactNode } from 'react';

import { isDevelop } from '@/shared/util';

import { clientQuery } from './client-query';

export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => clientQuery());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isDevelop() && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
