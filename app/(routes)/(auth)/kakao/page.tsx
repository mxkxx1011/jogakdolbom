'use client';

import { KakaoLoginButton } from '@/features/auth/kakao/ui';
import { IconLogoSquare } from '@/shared/asset';
import { Text } from '@/shared/ui';

function Kakao() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center gap-8 justify-center text-center'>
        <IconLogoSquare />
        <Text
          as='span'
          typography='body-0'
          className='mb-12 text-main-green-700'
        >
          간편하게 로그인하고
          <br />
          다양한 서비스를 이용해보세요.
        </Text>
      </div>

      <KakaoLoginButton />
    </div>
  );
}

export default Kakao;
