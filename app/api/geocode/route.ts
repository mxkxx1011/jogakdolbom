/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  if (!lat || !lng) {
    return NextResponse.json({ error: 'lat/lng required' }, { status: 400 });
  }

  // 1) 동네(행정동/법정동)
  const regionRes = await fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lng}&y=${lat}`,
    {
      headers: { Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY!}` },
    },
  );
  const regionData = await regionRes.json();
  const h = regionData.documents?.find((d: any) => d.region_type === 'H');
  const b = regionData.documents?.find((d: any) => d.region_type === 'B');
  const best = h ?? b;

  // 2) 상세주소(지번/도로명)
  const addrRes = await fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
    {
      headers: { Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY!}` },
    },
  );
  const addrData = await addrRes.json();
  const addr = addrData.documents?.[0];

  return NextResponse.json({
    sido: best?.region_1depth_name ?? null,
    sigungu: best?.region_2depth_name ?? null,
    dong: best?.region_3depth_name ?? null,
    code: best?.code ?? null,
    jibun: addr?.address?.address_name ?? null, // 지번 주소
    road: addr?.road_address?.address_name ?? null, // 도로명 주소
  });
}
