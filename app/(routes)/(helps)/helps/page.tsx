'use client';

import { useEffect } from 'react';

import { FilterPanel } from '@/features/help-filter/ui';
import { useHelpFilterStore } from '@/features/help-list/model';
import { HelpListSection } from '@/features/help-list/ui/help-list-section';
import { Text } from '@/shared/ui';

function HelpsPage() {
  const { resetApplied } = useHelpFilterStore()

  useEffect(() => {
    resetApplied()
  }, [])

  return (
    <main className='pt-11'>
      <Text as='h2' typography='headline-1' className='text-main-green-800'>
        돌봄참여
      </Text>
      <section className='flex gap-4.5 mt-8 w-full'>
        <FilterPanel />
        <HelpListSection />
      </section>
    </main>
  );
}

export default HelpsPage;
