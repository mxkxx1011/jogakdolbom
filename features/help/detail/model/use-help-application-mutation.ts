import { useMutation } from '@tanstack/react-query';

import { toast, useModalStore } from '@/shared/ui';

import { postHelpApply } from './service';
import { HelpApplicationMessageFormValues } from './types';

function useHelpApplicationMutation(helpId: number) {
  //   const queryClient = useQueryClient();
  const { closeModal } = useModalStore();

  return useMutation({
    mutationFn: (data: HelpApplicationMessageFormValues) => {
      return postHelpApply({ helpId, data });
    },
    onSuccess: () => {
      // 돌봄 신청자 목록 데이터 무효화
      toast.success('돌봄 신청이 완료되었습니다.');
      closeModal();
    },
    onError: () => {
      toast.error('돌봄 신청에 실패했습니다.');
    },
  });
}

export { useHelpApplicationMutation };
