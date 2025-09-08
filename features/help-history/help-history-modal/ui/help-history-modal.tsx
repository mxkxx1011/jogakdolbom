'use client';

import { useState } from 'react';

import { HelpHistory, HelpStatusBadge } from '@/entities/help';
import { HelpDeleteModal } from '@/features/help-history/help-delete/ui/help-delete-modal';
import {
  Button,
  ModalButtons,
  ModalCloseWrapper,
  ModalTitle,
  useModalStore,
} from '@/shared/ui';

import { Action, HelpRailActions } from '../../ui/help-rail-actions';

import { HelpHistoryModalApplicants } from './applicants';
import { HelpHistoryModalDetail } from './detail';

function HelpHistoryModal({ helpHistory }: { helpHistory: HelpHistory }) {
  const [activeAction, setActiveAction] = useState<'detail' | 'applicants'>(
    'detail',
  );

  const actions = [
    {
      id: 'detail',
      label: '상세내용',
      onClick: () => setActiveAction('detail'),
    },
    {
      id: 'applicants',
      label: '지원자 목록',
      onClick: () => setActiveAction('applicants'),
    },
  ] as Action[];

  const { helpTypeText, status } = helpHistory;

  const { openModal, closeModal } = useModalStore();

  return (
    <ModalCloseWrapper>
      <ModalTitle>{helpTypeText}</ModalTitle>

      <HelpStatusBadge className='my-2' status={status} size='sm' />

      <HelpRailActions className='mt-4' actions={actions} />
      {activeAction === 'detail' && (
        <HelpHistoryModalDetail helpHistory={helpHistory} />
      )}
      {activeAction === 'applicants' && (
        <HelpHistoryModalApplicants helpHistoryId={helpHistory.id} />
      )}
      <ModalButtons>
        <Button
          variant='outline'
          size='square'
          className='flex-1'
          onClick={closeModal}
        >
          닫기
        </Button>
        <Button
          size='square'
          className='flex-1'
          onClick={() =>
            openModal(<HelpDeleteModal helpHistory={helpHistory} />)
          }
        >
          요청 취소하기
        </Button>
      </ModalButtons>
    </ModalCloseWrapper>
  );
}

export { HelpHistoryModal };
