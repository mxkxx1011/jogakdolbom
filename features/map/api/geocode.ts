/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  if (!lat || !lng) {
    return NextResponse.json({ error: 'lat/lng required' }, { status: 400 });
  }

  const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lng}&y=${lat}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY!}`,
    },
    // (선택) 캐시 짧게: next: { revalidate: 10 }
  });

  if (!res.ok) {
    return NextResponse.json({ error: await res.text() }, { status: 500 });
  }
  const data = await res.json();

  // Kakao: H(행정동), B(법정동)
  const h = data.documents?.find((d: any) => d.region_type === 'H');
  const b = data.documents?.find((d: any) => d.region_type === 'B');
  const best = h ?? b;

  return NextResponse.json({
    sido: best?.region_1depth_name ?? null,
    sigungu: best?.region_2depth_name ?? null,
    dong: best?.region_3depth_name ?? null,
    code: best?.code ?? null, // 행정동/법정동 코드
  });
}
