/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useMemo, useState } from 'react';

import { Text } from '@/shared/ui';

import { useLocationStore } from '../model';

type Region = {
  sido: string | null;
  sigungu: string | null;
  dong: string | null;
  code: string | null;
  jibun: string | null;
  road: string | null;
};

function MyNeighborhood({ onLoaded }: { onLoaded?: (r: Region) => void }) {
  const coords = useLocationStore((s) => s.coords); // ✅ 전역 좌표 구독
  const setRegionLabel = useLocationStore((s) => s.setRegionLabel);

  const [region, setRegion] = useState<Region | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const query = useMemo(() => {
    if (!coords) {
      return null;
    }
    return `lat=${coords.lat}&lng=${coords.lng}`;
  }, [coords]);

  useEffect(() => {
    if (!query) {
      setRegion(null);
      return;
    }

    const controller = new AbortController();
    const fetchRegion = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/geocode?${query}`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`geocode failed: ${res.status}`);
        }
        const data: Region = await res.json();
        setRegion(data);

        const label =
          `${data.sido ?? ''} ${data.sigungu ?? ''} ${data.dong ?? ''}`.trim();
        setRegionLabel(label || null);

        onLoaded?.(data);
      } catch (e: any) {
        if (e.name === 'AbortError') {
          return;
        }
        setError(e.message ?? '동네 정보를 불러오지 못했어요.');
        setRegion(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRegion();
    return () => controller.abort();
  }, [query, onLoaded]);

  if (!coords) {
    return <p className='text-gray-600 text-sm'>좌표가 아직 없습니다.</p>;
  }
  if (loading && !region) {
    return (
      <p className='text-gray-600 text-sm'>현재 좌표 기준 동네 찾는 중…</p>
    );
  }
  if (error) {
    return <p className='text-red-600 text-sm'>{error}</p>;
  }
  if (!region) {
    return null;
  }

  return (
    <>
      <Text typography='body-3' className='text-gray-700'>
        선택한 동네:{' '}
        <Text as='span' typography='body-2' className='text-main-green-800'>
          {region.sido} {region.sigungu} {region.dong}
        </Text>
      </Text>

      <Text typography='caption-2' className='text-gray-700'>
        도로명주소: {region.road ? region.road : '없음'}
      </Text>
    </>
  );
}

export { MyNeighborhood };
