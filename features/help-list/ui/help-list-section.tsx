'use client';

import { Suspense } from 'react';

import { HelpList } from './help-list';

function HelpListSection() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HelpList />
    </Suspense>
  );
}

export { HelpListSection };
