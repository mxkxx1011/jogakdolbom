'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui';
import { cn } from '@/shared/util';

import { useHelpHistoryApplicantQuery } from '../model';

import { HelpHistoryModalApplicantItem } from './applicant-item';

function HelpHistoryModalApplicants({
  helpHistoryId,
}: {
  helpHistoryId: number;
}) {
  const { data } = useHelpHistoryApplicantQuery(helpHistoryId);

  if (!data) {
    return null;
  }

  const { applicants } = data;

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-2 h-60',
        applicants.length === 0 && 'justify-center',
      )}
    >
      {applicants.length === 0 && (
        <div className='text-center'>
          <Image
            src='/images/smile.png'
            alt='puzzle'
            width={100}
            height={100}
          />
          <Text
            as='span'
            typography='caption-2'
            className='text-gray-700 text-center'
          >
            {'  '}지원자가 없습니다.
          </Text>
        </div>
      )}
      {applicants.map((applicant) => (
        <HelpHistoryModalApplicantItem
          applicant={applicant}
          key={applicant.applicationId}
        />
      ))}
    </div>
  );
}

export { HelpHistoryModalApplicants };
