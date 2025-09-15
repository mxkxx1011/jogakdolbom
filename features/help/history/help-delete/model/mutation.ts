'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HelpQueryKeys } from '@/entities/help';
import { deleteHelp } from '@/features/help/history/help-delete/model/service';
import { toast } from '@/shared/ui';

export function useHelpDeleteMutation({ helpId }: { helpId: number }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteHelp({ helpId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HelpQueryKeys.all });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
