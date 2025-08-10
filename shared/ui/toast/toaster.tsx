'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ToastItem } from './toast-item';
import { useToastStore } from './use-toast-store';

function Toaster() {
  const { toastList } = useToastStore();

  const [toastRoot, setToastRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setToastRoot(document.getElementById('_toast'));
  }, []);

  if (!toastRoot) {
    return null;
  }

  return createPortal(
    <div className='fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2'>
      <AnimatePresence>
        {toastList.map((toast) => (
          <ToastItem key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </div>,
    toastRoot as HTMLElement,
  );
}

export { Toaster };
