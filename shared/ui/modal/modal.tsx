'use client';

import { ModalPortal } from './modal-portal';
import { useModalStore } from './use-modal-store';

function Modal() {
  const { openedModal } = useModalStore();
  return <ModalPortal>{openedModal}</ModalPortal>;
}

export { Modal };
