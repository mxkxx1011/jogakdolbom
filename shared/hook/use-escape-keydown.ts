'use client';

import { useEffect } from 'react';

function useEscapeKeydown(callback: () => void) {
  useEffect(() => {
    const handleEscapeKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', handleEscapeKeydown);

    return () => {
      window.removeEventListener('keydown', handleEscapeKeydown);
    };
  }, [callback]);
}

export { useEscapeKeydown };
