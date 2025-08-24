import { create } from 'zustand';

type Coords = { lat: number; lng: number };

type State = {
  coords: Coords | null;
  setCoords: (c: Coords) => void;
  reset: () => void;

  regionLabel: string | null; // ✅ 문자열 주소
  setRegionLabel: (label: string | null) => void;
  resetRegion: () => void;
};

const useLocationStore = create<State>()((set) => ({
  coords: null,
  setCoords: (coords) => set({ coords }),
  reset: () => set({ coords: null }),

  regionLabel: null,
  setRegionLabel: (label) => set({ regionLabel: label }),
  resetRegion: () => set({ regionLabel: null }),
}));

export { useLocationStore };
