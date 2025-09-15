'use client';

import { HelpDetail } from '@/entities/help';
import { useUserStore } from '@/entities/user';
import { Button, useModalStore } from '@/shared/ui';

import { HelpApplicationModal } from './help-application-modal';

function HelpApplicationButton({ helpDetail }: { helpDetail: HelpDetail }) {
  const { openModal } = useModalStore();
  const { user } = useUserStore();
  const isRequester = user?.id === helpDetail.requester.id;

  const isExpired = helpDetail.status === 4;

  return (
    <div className='flex justify-end'>
      <Button
        variant='detail'
        disabled={isRequester || isExpired}
        onClick={() =>
          openModal(<HelpApplicationModal helpId={helpDetail.id} />)
        }
      >
        돌봄 참여하기
      </Button>
    </div>
  );
}

export { HelpApplicationButton };
