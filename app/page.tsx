import Image from 'next/image';

import { Text } from '@/shared/ui';

export default function Home() {
  return (
    <main className='mt-20 text-center bg-warm-white'>
      <div className='flex flex-col gap-1.5 py-16'>
        <Text as='h2' typography='home-title-1' className='text-main-green-900'>
          하루의 틈, 조각
        </Text>
        <Text as='p' typography='subtitle-1' className='text-main-green-900'>
          조각 같은 시간이 쌓여 서로의 하루를 든든하게 만듭니다.
        </Text>
      </div>
      <Image
        src='/images/landing-hero.png'
        alt='랜딩페이지 히어로 이미지'
        width={1920}
        height={1080}
      />
      {/* TODO 하단 랜딩 페이지는 추후 구현 */}
    </main>
  );
}
