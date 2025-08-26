import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { HelpRequest } from '@/entities/help/model/types';
import { toast } from '@/shared/ui';

import { postHelpRequest } from './service';

function useHelpMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: HelpRequest) => postHelpRequest(data),
    onSuccess: () => {
      toast.success('도움 요청이 접수되었습니다.');
      router.push('/helps');
    },
    onError: () => {
      toast.error('도움 요청 접수에 실패했습니다.');
    },
  });
}

export { useHelpMutation };
