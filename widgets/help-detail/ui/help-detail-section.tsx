'use client';

import {
  HelpDetail,
  HelpDetailImage,
  InfoText,
  ProfileSection,
  useHelpDetailQuery,
} from '@/features/help/detail';
import { IconMap } from '@/shared/asset';
import { getGuDong } from '@/shared/util';

function HelpDetailSection({ helpId }: { helpId: number }) {
  const { data } = useHelpDetailQuery(helpId);

  if (!data) {
    return null;
  }

  const { imageUrl, addressText, requester } = data;

  return (
    <>
      <InfoText icon={<IconMap />}>
        {getGuDong({ address: addressText, addSi: true })}
      </InfoText>
      <section className='flex gap-10'>
        <div className='flex flex-col gap-2'>
          <HelpDetailImage imageUrl={imageUrl} />
          <ProfileSection user={requester} />
        </div>
        <HelpDetail helpDetail={data} />
      </section>
    </>
  );
}

export { HelpDetailSection };
