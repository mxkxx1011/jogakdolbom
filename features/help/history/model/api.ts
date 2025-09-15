import { HelpHistory } from '@/entities/help';
import { axiosInstance } from '@/shared/api';
import { Pagination, ResponseType } from '@/shared/type';

interface HelpHistoryListData {
  requests: HelpHistory[];
  pagination: Pagination;
}
type HelpHistoryListResponse = ResponseType<HelpHistoryListData>;

export async function getHelpHistoryList({
  page,
  size,
}: {
  page: number;
  size: number;
}) {
  const response = await axiosInstance.get<HelpHistoryListResponse>(
    '/helps/me',
    {
      params: {
        page,
        size,
      },
    },
  );

  const { data } = response;

  if (data.resultType === 'FAIL') {
    throw new Error(data.error.reason);
  }

  return data.success;
}
