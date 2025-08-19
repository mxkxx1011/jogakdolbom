import { useToastStore } from './use-toast-store';

const TOAST_DURATION = 3000;

const toast = {
  success: (message: string) => {
    useToastStore.getState().addToast({
      id: crypto.randomUUID(),
      message,
      type: 'success',
      duration: TOAST_DURATION,
    });
  },
  error: (message: string) => {
    useToastStore.getState().addToast({
      id: crypto.randomUUID(),
      message,
      type: 'error',
      duration: TOAST_DURATION,
    });
  },
  info: (message: string) => {
    useToastStore.getState().addToast({
      id: crypto.randomUUID(),
      message,
      type: 'info',
      duration: TOAST_DURATION,
    });
  },
  warning: (message: string) => {
    useToastStore.getState().addToast({
      id: crypto.randomUUID(),
      message,
      type: 'warning',
      duration: TOAST_DURATION,
    });
  },
};

export { toast };
