import { create } from 'zustand';

import { AppliedFilter, HelpFilter } from '@/entities/help';

const DEFAULT_HELP_TYPES: HelpFilter['helpTypes'] = [];
// 빈 배열 = 전체 선택

interface HelpFilterStore {
  applied: AppliedFilter;
  setApplied: (next: Partial<AppliedFilter>) => void;
  resetApplied: () => void;
}

export const useHelpFilterStore = create<HelpFilterStore>((set) => ({
  applied: {
    status: undefined,
    helpTypes: DEFAULT_HELP_TYPES,
  },
  setApplied: (next) => {
    set((state) => ({
      applied: {
        ...state.applied,
        ...next,
      },
    }));
  },
  resetApplied: () => {
    set({
      applied: {
        status: undefined,
        helpTypes: DEFAULT_HELP_TYPES,
      },
    });
  },
}));
