import { HelpHistory } from '@/entities/help';
import { useHelpDetailQuery } from '@/features/help-detail/model';
import { useHelpDeleteMutation } from '@/features/help-history/help-delete/model';
import {
  Button,
  ModalButtons,
  ModalCloseWrapper,
  ModalDescription,
  ModalTitle,
  Text,
  useModalStore,
} from '@/shared/ui';
import { formatDate, getTimeRange } from '@/shared/util';

function HelpDeleteModal({ helpHistory }: { helpHistory: HelpHistory }) {
  const mutation = useHelpDeleteMutation({ helpId: helpHistory.id });
  const { closeModal } = useModalStore();
  const { data } = useHelpDetailQuery(helpHistory.id);

  if (!data) {
    return null;
  }

  const handleDelete = () => {
    mutation.mutate();
    closeModal();
  };

  const { startTime, endTime, serviceDate, helpTypeText } = helpHistory;
  const { addressText } = data;

  return (
    <ModalCloseWrapper>
      <div className='flex flex-col gap-1'>
        <ModalTitle>돌봄 요청 취소하기</ModalTitle>
        <ModalDescription>해당 돌봄을 정말 취소하시겠습니까?</ModalDescription>
      </div>

      <div className='flex flex-col gap-1 my-4 border border-gray-200 rounded px-6 py-4'>
        <Text typography='subtitle-1' className='text-main-green-800'>
          {helpTypeText}
        </Text>
        <Text typography='body-0' className='text-gray-700'>
          {addressText}
        </Text>
        <Text typography='caption-1' className='text-gray-500'>
          {formatDate(serviceDate)} {getTimeRange(startTime, endTime)}
        </Text>
      </div>

      <ModalButtons>
        <Button
          className='flex-1'
          size='square'
          variant='outline'
          onClick={closeModal}
        >
          취소
        </Button>
        <Button className='flex-1' size='square' onClick={handleDelete}>
          삭제
        </Button>
      </ModalButtons>
    </ModalCloseWrapper>
  );
}
export { HelpDeleteModal };
