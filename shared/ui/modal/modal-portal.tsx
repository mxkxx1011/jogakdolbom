'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Overlay } from '../overlay';

import { ModalContainer } from './modal-container';
import { useModalStore } from './use-modal-store';

function ModalPortal({ children }: { children: ReactNode }) {
  const { isModalOpen, closeModal } = useModalStore();

  if (!isModalOpen) {
    return null;
  }
  const modalRoot = document.getElementById('_modal');

  return createPortal(
    <>
      <Overlay onClose={closeModal} />
      <ModalContainer>{children}</ModalContainer>
    </>,
    modalRoot as HTMLElement,
  );
}

export { ModalPortal };
