import { ReactNode } from 'react';
import { create } from 'zustand';

interface ModalStoreState {
  isModalOpen: boolean;
  openedModal: ReactNode | null;
  openModal: (modal: ReactNode) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStoreState>((set) => ({
  isModalOpen: false,
  openedModal: null,
  openModal: (modal) => set({ isModalOpen: true, openedModal: modal }),
  closeModal: () => set({ isModalOpen: false, openedModal: null }),
}));

export { useModalStore };
