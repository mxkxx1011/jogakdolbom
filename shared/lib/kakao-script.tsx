/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client';

import Script from 'next/script';

export function KakaoScript() {
  const jsKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

  return (
    <Script
      strategy='beforeInteractive'
      src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${jsKey}&autoload=false`}
    />
  );
}
