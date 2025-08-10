'use client';

import { createContext, useContext } from 'react';

interface RatingContextType {
  rate: number;
  onChangeRate: (r: number) => void;
}

const RatingContext = createContext<RatingContextType>({} as RatingContextType);

const useRatingContext = () => {
  const ctx = useContext(RatingContext);
  if (!ctx) {
    throw new Error('useRatingContext must be used inside RatingProvider');
  }
  return ctx;
};

export { RatingContext, useRatingContext };
