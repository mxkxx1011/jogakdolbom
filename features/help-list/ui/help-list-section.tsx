'use client';

import { Suspense } from 'react';

import { HelpList } from './help-list';
import { HelpListSkeleton } from './help-list-skeleton';

function HelpListSection() {
  return (
    <Suspense fallback={<HelpListSkeleton />}>
      <HelpList />
    </Suspense>
  );
}

export { HelpListSection };
