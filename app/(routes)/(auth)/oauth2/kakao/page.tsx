'use client';

import { Suspense } from 'react';

import { KakaoClient } from './kakao-client';

function KakaoOAuth2Page() {
  return (
    <Suspense fallback={null}>
      <KakaoClient />
    </Suspense>
  );
}

export default KakaoOAuth2Page;
