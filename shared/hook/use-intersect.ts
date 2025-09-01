'use client';

import { useCallback, useEffect, useRef } from 'react';

interface Params {
  onIntersect: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
  ) => void;
}

export function useIntersect<T extends HTMLElement = HTMLElement>({
  onIntersect,
}: Params) {
  const ref = useRef<T>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry, observer);
        }
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(callback);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  return ref;
}
