'use client';

export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';

import { MyInformationOverview } from '@/features/my-information/overview/ui';
import { MyInformation } from '@/features/my-information/ui';
import { Text } from '@/shared/ui';

// 동적 import로 MyHelpInformation을 클라이언트 사이드에서만 로드
const MyHelpInformation = dynamicImport(
  () =>
    import('@/widgets/my-help-information/ui/my-help-information').then(
      (mod) => ({ default: mod.MyHelpInformation }),
    ),
  {
    ssr: false,
    loading: () => (
      <div className='flex items-center justify-center h-32 text-gray-500'>
        로딩 중...
      </div>
    ),
  },
);

function MyPage() {
  return (
    <main className='pt-11'>
      <Text
        as='h1'
        typography='headline-1'
        className='text-main-green-900 mb-7.5'
      >
        마이 페이지
      </Text>
      <div className='space-y-5'>
        <MyInformation />
        <MyInformationOverview />
        <MyHelpInformation />
      </div>
    </main>
  );
}

export default MyPage;
