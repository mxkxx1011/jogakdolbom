import { useForm } from 'react-hook-form';

import {
  Button,
  Form,
  ModalButtons,
  ModalCloseWrapper,
  ModalDescription,
  ModalSection,
  ModalSectionTitle,
  ModalTitle,
  useModalStore,
} from '@/shared/ui';

import {
  HelpApplicationMessageFormValues,
  useHelpApplicationMutation,
} from '../model';

import { HelpApplicationMessageField } from './help-application-message-field';

function HelpApplicationModal({ helpId }: { helpId: number }) {
  const { closeModal } = useModalStore();

  const methods = useForm<HelpApplicationMessageFormValues>({
    mode: 'onBlur',
    defaultValues: {
      message: '',
    },
  });

  const { mutate: applyHelp } = useHelpApplicationMutation(helpId);

  const onSubmit = (data: HelpApplicationMessageFormValues) => {
    applyHelp(data);
  };

  return (
    <ModalCloseWrapper>
      <Form {...methods}>
        <form id='helpRequestMessage' onSubmit={methods.handleSubmit(onSubmit)}>
          <ModalTitle>돌봄 참여하기</ModalTitle>
          <ModalDescription className='mt-0.5'>
            돌봄에 참여해주셔서 감사합니다!
          </ModalDescription>
          <ModalSection className='mt-3 mb-12'>
            <ModalSectionTitle>어떤 도움을 주실 수 있나요?</ModalSectionTitle>
            <HelpApplicationMessageField />
          </ModalSection>
          <ModalButtons>
            <Button
              type='button'
              variant='outline'
              className='flex-1'
              size='square'
              onClick={closeModal}
            >
              취소
            </Button>
            <Button
              type='submit'
              form='helpRequestMessage'
              className='flex-1'
              size='square'
            >
              돌봄 참여하기
            </Button>
          </ModalButtons>
        </form>
      </Form>
    </ModalCloseWrapper>
  );
}

export { HelpApplicationModal };
