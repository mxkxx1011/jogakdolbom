import { useQuery } from '@tanstack/react-query';

import { HelpQueryKeys } from '@/entities/help';

import { getMyHelpApplyList } from '../api/service';

const page = 1;
const size = 10;

function useMyHelpApplyList() {
  return useQuery({
    queryKey: HelpQueryKeys.applyList(),
    queryFn: () => getMyHelpApplyList({ page, size }),
  });
}

export { useMyHelpApplyList };
