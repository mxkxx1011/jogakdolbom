import { type ReactNode } from 'react';

import { RatingContext } from './rating-context';

interface RatingGroupProps {
  rate: number;
  onChangeRate: (r: number) => void;
  children: ReactNode;
}

function RatingGroup({ rate, onChangeRate, children }: RatingGroupProps) {
  return (
    <RatingContext.Provider value={{ rate, onChangeRate }}>
      {children}
    </RatingContext.Provider>
  );
}

export { RatingGroup };
