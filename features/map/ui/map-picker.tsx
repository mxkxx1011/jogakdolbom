/* eslint-disable @typescript-eslint/no-explicit-any */
// features/map-picker/ui/MapPicker.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/shared/util';

import { useLocationStore } from '../model';

type Props = {
  defaultCenter?: { lat: number; lng: number };
  level?: number;
  onPick?: (pos: { lat: number; lng: number }) => void;
  autoLocate?: boolean; // 최초 렌더 때 현재 위치로 이동할지
};

function MapPicker({
  defaultCenter = { lat: 37.5665, lng: 126.978 },
  level = 3,
  onPick,
  autoLocate = true,
}: Props) {
  const mapEl = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const initialized = useRef(false);
  const [ready, setReady] = useState(false);

  const coords = useLocationStore((s) => s.coords);
  const setCoords = useLocationStore((s) => s.setCoords);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    if (!window.kakao?.maps || !mapEl.current) {
      return;
    }

    window.kakao.maps.load(() => {
      const { kakao } = window as any;
      const map = new kakao.maps.Map(mapEl.current!, {
        center: new kakao.maps.LatLng(defaultCenter.lat, defaultCenter.lng),
        level,
      });
      mapRef.current = map;

      markerRef.current = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(defaultCenter.lat, defaultCenter.lng),
        map,
      });

      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

      // 클릭 → 전역 좌표만 갱신 (마커 이동은 effect가 처리)
      kakao.maps.event.addListener(map, 'click', (e: any) => {
        const lat = e.latLng.getLat();
        const lng = e.latLng.getLng();
        setCoords({ lat, lng });
        onPick?.({ lat, lng });
      });

      initialized.current = true;
      setReady(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ← 의존성 비움: 절대 재초기화되지 않게

  useEffect(() => {
    if (!coords || !mapRef.current || !markerRef.current) {
      return;
    }
    const { kakao } = window as any;
    const latLng = new kakao.maps.LatLng(coords.lat, coords.lng);
    markerRef.current.setPosition(latLng);
    mapRef.current.panTo(latLng);
  }, [coords]);

  // 현재 위치로 이동
  const goMyLocation = () => {
    if (!mapRef.current) {
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const latLng = new window.kakao.maps.LatLng(lat, lng);

        mapRef.current.panTo(latLng);
        markerRef.current.setPosition(latLng);

        setCoords({ lat, lng }); // ✅ 전역 저장
        onPick?.({ lat, lng });
      },
      () => {
        // 권한 거부/오류 시 기본 위치로
        const latLng = new window.kakao.maps.LatLng(
          defaultCenter.lat,
          defaultCenter.lng,
        );
        mapRef.current.panTo(latLng);
      },
      { enableHighAccuracy: true, timeout: 8000 },
    );
  };

  useEffect(() => {
    if (ready && autoLocate) {
      goMyLocation();
    }
  }, [ready, autoLocate]);

  return (
    <div className='space-y-3 relative'>
      <div className='flex gap-2'>
        <button
          type='button'
          className={cn(
            'px-3 py-1 shadow-md caption-1 cursor-pointer rounded-lg border absolute top-4 right-2 z-100 bg-white',
            'hover:scale-105 transition-all duration-300',
          )}
          onClick={goMyLocation}
        >
          현재 위치로
        </button>
        {/* 아래 검색 입력은 2번 항목에서 구현 */}
      </div>
      <div ref={mapEl} className='w-full h-[420px] rounded-2xl border' />
    </div>
  );
}

export { MapPicker };
