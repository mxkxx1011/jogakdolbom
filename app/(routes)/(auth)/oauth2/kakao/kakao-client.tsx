'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useCallback } from 'react';

import { useUserStore } from '@/entities/user/model';
import { useKakaoLoginMutation } from '@/features/auth/kakao/model';
import { DotsSpinner, Text } from '@/shared/ui';

export function KakaoClient() {
  const sp = useSearchParams(); // ✅ client에서 사용
  const code = sp.get('code');
  const mutation = useKakaoLoginMutation();

  const { fetchUserInfo } = useUserStore();

  const fetchMe = useCallback(() => fetchUserInfo(), []);

  useEffect(() => {
    if (!code) {
      return;
    }
    mutation.mutate(code, { onSuccess: fetchMe });
  }, [code, mutation.mutate, fetchMe]);

  return (
    <div className='mt-20 flex flex-col items-center justify-center gap-8'>
      <DotsSpinner />
      <Text as='label' typography='subtitle-1'>
        카카오 로그인 중입니다 ...
      </Text>
    </div>
  );
}
