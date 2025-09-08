import { ButtonHTMLAttributes } from 'react';

import { IconKakao } from '@/shared/asset';
import { Text } from '@/shared/ui';
import { cn } from '@/shared/util';

const API_BASE = (process.env.NEXT_PUBLIC_API_URL ?? '').replace(/\/$/, '');

function KakaoLoginButton({
  className,

  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const handleClick = () => {
    const url = `${API_BASE}/auth/kakao`;
    // 외부(origin)으로 이동하므로 router 대신 location 사용
    window.location.assign(url);
  };
  return (
    <button
      onClick={handleClick}
      className={cn(
        'bg-[#FEE500] cursor-pointer w-full px-8 max-w-100 md:w-100 flex gap-2 items-center justify-center py-3.5 rounded-md',
        className,
      )}
      {...restProps}
    >
      <IconKakao />
      <Text as='span' typography='body-0'>
        카카오계정으로 로그인/회원가입
      </Text>
    </button>
  );
}

export { KakaoLoginButton };
