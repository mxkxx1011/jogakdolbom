import { useToastStore } from './use-toast-store';

const TOAST_DURATION = 3000;

function useToast() {
  const { addToast } = useToastStore();

  const toast = {
    success: (message: string) => {
      addToast({
        id: crypto.randomUUID(),
        message,
        type: 'success',
        duration: TOAST_DURATION,
      });
    },
    error: (message: string) => {
      addToast({
        id: crypto.randomUUID(),
        message,
        type: 'error',
        duration: TOAST_DURATION,
      });
    },
    info: (message: string) => {
      addToast({
        id: crypto.randomUUID(),
        message,
        type: 'info',
        duration: TOAST_DURATION,
      });
    },
    warning: (message: string) => {
      addToast({
        id: crypto.randomUUID(),
        message,
        type: 'warning',
        duration: TOAST_DURATION,
      });
    },
  };

  return toast;
}

export { useToast };
