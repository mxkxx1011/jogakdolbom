import { create } from 'zustand';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration: number;
}

interface ToastStoreType {
  toastList: Toast[];
  addToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
}

const useToastStore = create<ToastStoreType>((set) => ({
  toastList: [],
  addToast: (toast) =>
    set((state) => ({ toastList: [toast, ...state.toastList] })),
  removeToast: (id) =>
    set((state) => ({
      toastList: state.toastList.filter((toast) => toast.id !== id),
    })),
}));

export { useToastStore };
