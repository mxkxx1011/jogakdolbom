'use client';

import { useMemo, useState } from 'react';

import { HelpHistory, HelpStatusBadge, HelpTypeToText } from '@/entities/help';
import { ParticipantInformation } from '@/features/help/history/help-history-modal/ui/participant-information';
import {
  Button,
  ModalButtons,
  ModalCloseWrapper,
  ModalTitle,
  useModalStore,
} from '@/shared/ui';

import { HelpDeleteModal } from '../../help-delete/ui';
import { Action, HelpRailActions } from '../../ui/help-rail-actions';

import { HelpHistoryModalApplicants } from './applicants';
import { HelpHistoryModalDetail } from './detail';

type TabId = 'detail' | 'applicants' | 'participant';

function HelpHistoryModal({ helpHistory }: { helpHistory: HelpHistory }) {
  const [activeAction, setActiveAction] = useState<TabId>('detail');

  const { status, helpType } = helpHistory;

  const { openModal, closeModal } = useModalStore();

  const actions: Action[] = useMemo(() => {
    const base: Action[] = [
      {
        id: 'detail',
        label: '상세내용',
        onClick: () => setActiveAction('detail'),
      },
    ];

    if (status === 0) {
      base.push({
        id: 'applicants',
        label: '지원자 목록',
        onClick: () => setActiveAction('applicants'),
      });
    } else if (status === 1) {
      base.push({
        id: 'participants',
        label: '참여자 정보',
        onClick: () => setActiveAction('participant'),
      });
    }

    return base;
  }, [status]);

  return (
    <ModalCloseWrapper>
      <ModalTitle>{HelpTypeToText(helpType)}</ModalTitle>

      <HelpStatusBadge className='my-2' status={status} size='sm' />

      <HelpRailActions className='mt-4' actions={actions} />
      {activeAction === 'detail' && (
        <HelpHistoryModalDetail helpHistory={helpHistory} />
      )}
      {activeAction === 'applicants' && (
        <HelpHistoryModalApplicants helpHistoryId={helpHistory.id} />
      )}
      {activeAction === 'participant' && (
        <ParticipantInformation helpHistory={helpHistory} />
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
