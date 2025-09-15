import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HelpQueryKeys } from '@/entities/help';
import { postAcceptHelpApplicant } from '@/features/help/accept/api';
import { toast, useModalStore } from '@/shared/ui';

interface Props {
  helpId: number;
  applicationId: number;
  decision: 'accept' | 'reject';
}

export function useAcceptHelpApplicantMutation({
  helpId,
  applicationId,
  decision,
}: Props) {
  const queryClient = useQueryClient();
  const { closeModal } = useModalStore();

  return useMutation({
    mutationFn: () =>
      postAcceptHelpApplicant(helpId, { applicationId, decision }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HelpQueryKeys.all });
      toast.success('수락되었습니다');
      closeModal();
    },
    onError: () => {
      toast.error('수락이 실패했습니다');
      closeModal();
    },
  });
}
