'use client';

import { useParams } from 'next/navigation';

import { Text } from '@/shared/ui';
import { HelpDetailSection } from '@/widgets/help-detail/ui';

function HelpDetailPage() {
  const { helpId } = useParams();
  return (
    <main className='pt-11 flex flex-col gap-4'>
      <Text typography='headline-1' className='text-main-green-900'>
        돌봄참여
      </Text>

      <HelpDetailSection helpId={Number(helpId)} />
    </main>
  );
}

export default HelpDetailPage;
