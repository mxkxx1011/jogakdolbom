import { axiosInstance } from '@/shared/api';
import { type ResponseType } from '@/shared/type';

import { HelpHistoryApplicantResponse } from './types';

type Response = ResponseType<HelpHistoryApplicantResponse>;

export async function getHelpHistoryApplyList({
  helpHistoryId,
  page,
  size,
}: {
  helpHistoryId: number;
  page: number;
  size: number;
}) {
  const response = await axiosInstance.get<Response>(
    `/helps/${helpHistoryId}/apply-list`,
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
