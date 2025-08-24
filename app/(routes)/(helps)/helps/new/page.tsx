'use client';

import { Text } from '@/shared/ui';
import { HelpRequestForm } from '@/widgets/help-request-form/ui/help-request-form';

function NewHelpPage() {
  return (
    <main className='pt-12'>
      <Text
        as='h2'
        typography='headline-1'
        className='text-main-green-900 mb-12'
      >
        돌봄요청
      </Text>

      <HelpRequestForm />
    </main>
  );
}

export default NewHelpPage;
